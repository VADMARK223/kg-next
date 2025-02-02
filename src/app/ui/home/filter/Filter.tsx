/**
 * Компонент фильтра.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX } from 'react'
import { Tag } from '@/app/lib/model/entity/Tag'
import TagsControl from '@/app/ui/home/filter/TagsControl'
import InputControl from '@/app/ui/home/filter/InputControl'
import WordsCountViewer from '@/app/ui/home/filter/WordsCountViewer'

interface FilterProps {
  tags: Tag[]
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  return (
    <div className={'flex-col'}>
      <InputControl/>
      <div style={{ paddingTop: '10px' }}>
        <TagsControl tags={tags}/>
      </div>
      <div style={{ paddingTop: '10px' }}>
        <WordsCountViewer/>
      </div>
    </div>
  )
}

export default Filter