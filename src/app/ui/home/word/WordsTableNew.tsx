/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 31.01.2025
 */
'use client'
import { JSX, useEffect, useRef, useState } from 'react'
import { Word } from '@/app/lib/model/word'
import { $filters, Filters, wordsFilteredCountUpdated } from '@/app/lib/effector/filter'
import { useUnit } from 'effector-react'
import { wordsUpdated } from '@/app/lib/effector/word'
import { fetchWordsByTag, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import clsx from 'clsx'
import TableRow from '@/app/ui/home/word/TableRow'
import BackButton from '@/app/ui/home/word/BackButton'

interface WordsTableProps {
  initWords: Word[]
}

const WordsTableNew = ({ initWords }: WordsTableProps): JSX.Element | null => {
  const [words, setWords] = useState<Word[]>(initWords)
  const [nameTagColumn, setNameTagColumn] = useState<string>('Категории')
  const filters: Filters = useUnit($filters)

  useEffect(() => {
    wordsUpdated(initWords)
  }, [initWords])

  useEffect(() => {
    setNameTagColumn(filters.selectedTagMode ? 'Действие' : 'Категории')
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

  const containerRef = useRef(null)
  const [tableHeight, setTableHeight] = useState('auto')
  useEffect(() => {
    const updateTableHeight = () => {
      if (containerRef.current) {
        const containerHeight = window.innerHeight
        // @ts-ignore
        const offsetTop = containerRef.current.offsetTop
        setTableHeight(`${containerHeight - offsetTop - 10}px`) // 10px - небольшой отступ
      }
    }

    updateTableHeight()
    window.addEventListener('resize', updateTableHeight)

    return () => window.removeEventListener('resize', updateTableHeight)
  }, [])

  return (
    <div className={'flex flex-col gap-3'}>
      <button className={'btn btn-primary'}>Button1</button>
      <button className={'btn btn-primary'}>Button2</button>
      {filters.searchString.length && filters.wordsFilteredCount === 0
        ? <>Слово <span className="text-red-500 font-bold">{filters.searchString}</span> не найдено.😞</>
        // : <div className="max-h-96 overflow-auto border border-gray-700 rounded-lg">
        : <div
          ref={containerRef}
          className="overflow-auto border border-gray-700 rounded-lg"
          // style={{ maxHeight: 'calc(100vh - 100px)' }}
          style={{ maxHeight: tableHeight }}
        >
          <table className={clsx('table bg-gray-800', 'table-zebra', 'w-full', 'sm:w-1/2')}>
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
    </div>
  )
}

export default WordsTableNew