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

interface FilterProps {
  tags: Tag[]
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  return (
    <div>
      <InputControl/>
      <div style={{paddingTop: '10px'}}>
        <TagsControl tags={tags}/>
      </div>
    </div>
  )
}

export default Filter