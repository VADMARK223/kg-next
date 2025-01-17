/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect } from 'react'
import { Word } from '@/app/lib/model/word'
import clsx from 'clsx'
import { isDevMode } from '@/app/lib/utils'
import Link from 'next/link'
import { $searchString, $words, wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'

interface WordsTableProps {
  initWords: Word[]
}

interface TableRowProps {
  id: number
  value?: number | string
  word: Word
  needColored?: boolean
}

const TableRow = ({ id, value, word, needColored = false }: TableRowProps): JSX.Element => (<th>
  {!isDevMode() ? <span style={{ color: needColored ? word.color : undefined }}>{value}</span> :
    <Link href={`/word/${id}`}>
      <span style={{ color: needColored ? word.color : undefined }}>{value}</span>
    </Link>}
</th>)

const WordsTable = ({ initWords }: WordsTableProps): JSX.Element | null => {
  let words = useUnit($words)
  const searchString = useUnit($searchString)

  words = words.filter((word) =>
    word.ru.toLowerCase().includes(searchString) || word.kg.toLowerCase().includes(searchString)
  )

  useEffect(() => {
    wordsUpdated(initWords)
  }, [initWords])

  return (
    <div className={'max-w-full sm:max-w-2xl'}>
      <table className={clsx('table', { 'table-zebra': !isDevMode() })}>
        <thead>
        <tr>
          <th>Русский</th>
          <th>Кыргызский</th>
          <th>Категория</th>
          <th>Английский</th>
        </tr>
        </thead>
        <tbody>
        {words.map((word) => (
          <tr key={word.id} className={clsx({ 'cursor-pointer hover:bg-gray-800': isDevMode() })}>
            <TableRow id={word.id} value={word.ru} word={word}/>
            <TableRow id={word.id} value={word.kg} word={word}/>
            <TableRow id={word.id} value={word.tagname} word={word} needColored={true}/>
            <TableRow id={word.id} value={word.en} word={word}/>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordsTable