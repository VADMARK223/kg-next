/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import { Tag } from '@/app/lib/definitions'

interface TagSelectProps {
  data: Tag[]
}

const TagSelect = ({ data }: TagSelectProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(null)

  return (
    <select
      className={'select'}
      value={value ?? ''}
      onChange={event => setValue(Number(event.target.value))}>
      {data.map((tag) => (<option key={tag.id} value={tag.id}>{tag.name}</option>))}
    </select>
  )
}

export default TagSelect