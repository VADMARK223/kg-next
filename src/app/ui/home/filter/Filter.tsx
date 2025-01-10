/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import { Tag, Word } from '@/app/lib/model'
import ValueViewer from '@/app/ui/common/ValueViewer'

interface FilterProps {
  tags: Tag[]
  words: Word[]
}

const Filter = ({ tags, words }: FilterProps): JSX.Element => {

  return (
    <div className={'flex items-center gap-3'}>
      <ValueViewer name={'Слов'} value={words.length}/>
      <TagSelect data={tags} callback={(value: number) => {
        console.log('value:', value)
      }}/>
      <button className={'btn btn-primary btn-disabled'}
              onClick={() => {}}>
        Применить
      </button>
    </div>
  )
}

export default Filter