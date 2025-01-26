/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import { Word } from '@/app/lib/model/word'
import clsx from 'clsx'
import { isDevMode } from '@/app/lib/utils'
import { wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'
import TableRow from '@/app/ui/home/word/TableRow'
import { $filters, Filters, wordsFilteredCountUpdated } from '@/app/lib/effector/filter'
import { fetchWordsByTag, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import BackButton from '@/app/ui/home/word/BackButton'

interface WordsTableProps {
  initWords: Word[]
}

const WordsTable = ({ initWords }: WordsTableProps): JSX.Element | null => {
  const [words, setWords] = useState<Word[]>(initWords)
  const [nameTagColumn, setNameTagColumn] = useState<string>('Категории')
  const filters: Filters = useUnit($filters)

  useEffect(() => {
    wordsUpdated(initWords)
  }, [initWords])

  useEffect(() => {
    if (filters.selectedTagMode) {
      setNameTagColumn('Действие')
    } else {
      setNameTagColumn('Категории')
    }
  }, [filters.selectedTagMode])

  const fetchWords = async (tagId: number | undefined) => {
    return IS_REMOTE_MODE ? await fetchWordsByTag(tagId) : fetchWordsLocal(tagId)
  }

  useEffect(() => {
    wordsFilteredCountUpdated(words.length)
  }, [words.length])

  useEffect(() => {
    const searchStringLowerCase = filters.searchString.toLowerCase()
    fetchWords(filters.selectedTag).then(value => {
      setWords(value.filter((word) =>
        word.ru.toLowerCase().includes(searchStringLowerCase) || word.kg.toLowerCase().includes(searchStringLowerCase) || word.en?.toLowerCase().includes(searchStringLowerCase)
      ))
    })

  }, [filters.searchString, filters.selectedTag])

  return (
    <>
      {filters.searchString.length && filters.wordsFilteredCount === 0
        ? <>Слово <span className="text-red-500 font-bold">{filters.searchString}</span> не найдено.😞</>
        : <div className={'max-w-full sm:max-w-2xs'}>
          <table className={clsx(`table bg-gray-800`, { 'table-zebra': !isDevMode() })}>
            <thead>
            <tr>
              <th>Русский</th>
              <th>Кыргызский</th>
              <th>Английский</th>
              <th>{nameTagColumn}</th>
            </tr>
            </thead>
            <tbody>
            {words.map((word) => (
              <tr key={word.id}>
                <TableRow value={word.ru} word={word}/>
                <TableRow value={word.kg} word={word}/>
                <TableRow value={word.en} word={word}/>
                {filters.selectedTagMode
                  ?
                  <BackButton/>
                  :
                  <TableRow value={word.tagname} word={word} isTag={true}/>
                }

              </tr>
            ))}
            </tbody>
          </table>
        </div>
      }
    </>
  )
}

export default WordsTable