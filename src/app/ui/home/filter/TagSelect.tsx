/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import { Tag } from '@/app/lib/model'

interface TagSelectProps {
  data: Tag[]
  callback?: (value: number) => void
}

const TagSelect = ({ data, callback }: TagSelectProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(null)

  return (
    <select
      className={'select'}
      defaultValue={''}
      value={value ?? undefined}
      onChange={event => {
        const valueNumber = Number(event.target.value)
        setValue(valueNumber)
        if (callback) {
          callback(valueNumber)
        }
      }}
    >
      <option value={''} disabled>Выберите категорию</option>
      {data.map((tag) => (<option key={tag.id} value={tag.id}>{tag.name}</option>))}
    </select>
  )
}

export default TagSelect