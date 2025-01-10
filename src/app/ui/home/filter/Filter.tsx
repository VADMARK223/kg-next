/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word } from '@/app/lib/model/word'

interface FilterProps {
  tags: Tag[]
  words: Word[]
}

const Filter = ({ tags, words }: FilterProps): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<number | null>(null)

  return (
    <div className={'flex items-center gap-3'}>
      <ValueViewer name={'Слов'} value={words.length}/>
      <TagSelect data={tags} callback={(value: number) => {
        setSelectedTags(value)
      }}/>
      <ValueViewer name={'Выбрана категория'} value={selectedTags}/>
      <button className={'btn btn-primary btn-disabled'}
              onClick={() => {
              }}>
        Применить
      </button>
    </div>
  )
}

export default Filter