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
import { $words, wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'
import Link from 'next/link'
import { fetchWordsByTag, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import { isDevMode } from '@/app/lib/utils'

interface FilterProps {
  tags: Tag[]
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  const words = useUnit($words)
  const [selectedTag, setSelectedTag] = useState<number>(0)
  // const [applyBtnDisabled, setApplyBtnDisabled] = useState<boolean>(true)

  const handlerApply = async (tagId: number/*selectedData: SelectedData*/) => {
    const newWords = IS_REMOTE_MODE ? await fetchWordsByTag(tagId) : fetchWordsLocal(tagId)
    wordsUpdated(newWords)
  }

  useEffect(() => {
    handlerApply(selectedTag)
    // setApplyBtnDisabled(selectedTag == null)
  }, [selectedTag])

  return (
    <div className={'flex flex-wrap items-center gap-3'}>
      <TagSelect data={tags} callback={(value: number) => {
        setSelectedTag(value)
      }}/>
      {/*<button className={'btn btn-primary'}
              disabled={applyBtnDisabled}
              onClick={() => {
                if (selectedTag != null) {
                  handlerApply({ tagId: selectedTag })
                }
              }}>
        Применить
      </button>*/}
      <Link href={{
        pathname: `/quiz/${selectedTag}`
        /*query: {
          data: JSON.stringify([
            { id: 1, name: 'Объект 1' },
            { id: 2, name: 'Объект 2' }
          ])
        }*/
      }}
      >
        <button className={'btn btn-primary'}>Учить</button>
      </Link>
      <ValueViewer name={'Слов'} value={words.length}/>
      {isDevMode() ? <ValueViewer name={'Режим'} value={IS_REMOTE_MODE ? 'Remote' : 'Local'}/> : null}
    </div>
  )
}

export default Filter