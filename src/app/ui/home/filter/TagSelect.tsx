/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX } from 'react'
import { Tag } from '@/app/lib/model/entity/Tag'
import { $filters, Filters, selectedTagUpdated } from '@/app/lib/effector/filter'
import { useUnit } from 'effector-react'

interface TagSelectProps {
  data: Tag[]
  callback?: (value: number) => void
}

const TagSelect = ({ data, callback }: TagSelectProps): JSX.Element => {
  const filters: Filters = useUnit($filters)

  return (
    <select
      className={'select w-40'}
      value={filters.selectedTag === 0 ? undefined : filters.selectedTag}
      onChange={event => {
        const valueNumber = Number(event.target.value)
        selectedTagUpdated(Number(event.target.value))
        if (callback) {
          callback(valueNumber)
        }
      }}
    >
      <option value={''}>Все категории</option>
      {data.map((tag) => (<option key={tag.id} value={tag.id}>{tag.name}</option>))}
    </select>
  )
}

export default TagSelect