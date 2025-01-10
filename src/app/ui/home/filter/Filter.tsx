/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import { Tag } from '@/app/lib/model'

interface FilterProps {
  tags: Tag[]
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  return (
    <div>
      <TagSelect data={tags} callback={(value: number) => {
        console.log('value:', value)
      }}/>
    </div>
  )
}

export default Filter