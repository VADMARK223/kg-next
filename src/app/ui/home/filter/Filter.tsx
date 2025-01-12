/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word } from '@/app/lib/model/word'
import { $words, wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'
import { IS_REMOTE_MODE } from '@/app/lib/utils'

interface FilterProps {
  tags: Tag[]
}

interface SelectedData {
  tagId: number
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  const words = useUnit($words)
  const [selectedTag, setSelectedTag] = useState<number | null>(null)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)

  const handlerApply = async (selectedData: SelectedData) => {
    const response = await fetch(`/api/word`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedData)
    })
    const newWords: Word[] = await response.json()
    wordsUpdated(newWords)
  }

  useEffect(() => {
    setBtnDisabled(selectedTag == null)
  }, [selectedTag])

  return (
    <div className={'flex flex-wrap items-center gap-3'}>
      <TagSelect data={tags} callback={(value: number) => {
        setSelectedTag(value)
      }}/>
      <button className={'btn btn-primary'}
              disabled={btnDisabled}
              onClick={() => {
                if (selectedTag != null) {
                  handlerApply({ tagId: selectedTag })
                }
              }}>
        Применить
      </button>
      <ValueViewer name={'Слов'} value={words.length}/>
      <ValueViewer name={'Режим'} value={IS_REMOTE_MODE ? 'Remote' : 'Local'}/>
    </div>
  )
}

export default Filter