/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX } from 'react'
import { Word } from '@/app/lib/model/word'
import clsx from 'clsx'
import { isDevMode } from '@/app/lib/utils'
import Link from 'next/link'

interface WordsTableProps {
  words: Word[]
}

interface TableRowProps {
  id: number
  value: number | string
}

const TableRow = ({ id, value }: TableRowProps): JSX.Element => (<th>
  {!isDevMode() ? <>{value}</> : <Link href={`/word/${id}`}><>{value}</>
  </Link>}
</th>)

const WordsTable = ({ words }: WordsTableProps): JSX.Element | null => {
  return (
    <div>

      <table className={clsx('table', { 'table-zebra': !isDevMode() })}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Русский</th>
          <th>Кыргызский</th>
          <th>Категория</th>
        </tr>
        </thead>
        <tbody>
        {words.map((tag) => (
          <tr key={tag.id} className={clsx({ 'cursor-pointer hover:bg-gray-800': isDevMode() })}>
            <TableRow id={tag.id} value={tag.id}/>
            <TableRow id={tag.id} value={tag.ru}/>
            <TableRow id={tag.id} value={tag.kg}/>
            <TableRow id={tag.id} value={tag.tagname}/>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordsTable