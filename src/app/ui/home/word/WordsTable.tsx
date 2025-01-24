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
import { $filters, Filters, selectedTagUpdated, wordsFilteredCountUpdated } from '@/app/lib/effector/filter'
import {
  fetchByTagByName,
  fetchByTagByNameLocal,
  fetchWordsByTag,
  fetchWordsLocal,
  IS_REMOTE_MODE
} from '@/app/api/api'
import { Tag } from '@/app/lib/model/entity/Tag'

interface WordsTableProps {
  initWords: Word[]
}

const WordsTable = ({ initWords }: WordsTableProps): JSX.Element | null => {
  const [words, setWords] = useState<Word[]>(initWords)
  // const searchString = useUnit($searchString)
  const filters: Filters = useUnit($filters)

  useEffect(() => {
    wordsUpdated(initWords)
  }, [initWords])

  const fetchWords = async (tagId: number) => {
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

  const clickHandler = async (tagName: string) => {
    const tag: Tag = IS_REMOTE_MODE ? await fetchByTagByName(tagName) : fetchByTagByNameLocal(tagName)
    selectedTagUpdated(tag.id)
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
          <tr key={word.id}
              // className={clsx({ 'cursor-pointer hover:bg-gray-800': isDevMode() })}
          >
            <TableRow id={word.id} value={word.ru} word={word}/>
            <TableRow id={word.id} value={word.kg} word={word}/>
            <TableRow id={word.id} value={word.en} word={word}/>
            <TableRow id={word.id} callback={clickHandler} value={word.tagname} word={word} isTag={true}/>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordsTable