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
import { $searchString, $words, wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'
import TableRow from '@/app/ui/home/word/TableRow'

interface WordsTableProps {
  initWords: Word[]
}

const WordsTable = ({ initWords }: WordsTableProps): JSX.Element | null => {
  let words = useUnit($words)
  const searchString = useUnit($searchString)

  const searchStringLowerCase = searchString.toLowerCase()
  words = words.filter((word) =>
    word.ru.toLowerCase().includes(searchStringLowerCase) || word.kg.toLowerCase().includes(searchStringLowerCase) || word.en?.toLowerCase().includes(searchStringLowerCase)
  )

  useEffect(() => {
    wordsUpdated(initWords)
  }, [initWords])

  const clickHandler = (tagname:string) => {
    console.log('click handler:', tagname)
  }

  return (
    <div className={'max-w-full sm:max-w-2xl'}>
      <table className={clsx('table', { 'table-zebra': !isDevMode() })}>
        <thead>
        <tr>
          <th>Русский</th>
          <th>Кыргызский</th>
          <th>Английский</th>
          <th>Категория</th>
        </tr>
        </thead>
        <tbody>
        {words.map((word) => (
          <tr key={word.id} className={clsx({ 'cursor-pointer hover:bg-gray-800': isDevMode() })}>
            <TableRow id={word.id} callback={clickHandler} value={word.ru} word={word}/>
            <TableRow id={word.id} callback={clickHandler} value={word.kg} word={word}/>
            <TableRow id={word.id} callback={clickHandler} value={word.en} word={word}/>
            <TableRow id={word.id} callback={clickHandler} value={word.tagname} word={word} isTag={true}/>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordsTable