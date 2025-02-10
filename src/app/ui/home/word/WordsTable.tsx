/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect, useRef, useState } from 'react'
import { Word } from '@/app/lib/model/word'
import clsx from 'clsx'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [tableHeight, setTableHeight] = useState('auto')
  const [showScrollButton, setShowScrollButton] = useState(false)

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
    const updateTableHeight = () => {
      if (containerRef.current) {
        const containerHeight = window.innerHeight
        const offsetTop = containerRef.current.offsetTop
        setTableHeight(`${containerHeight - offsetTop - 12}px`) // 10px - небольшой отступ
      }
    }

    updateTableHeight()
    window.addEventListener('resize', updateTableHeight)

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop
        setShowScrollButton(scrollTop > 300)  // Показывать кнопку, если проскроллил больше 300px
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('resize', updateTableHeight)
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

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


  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={'flex flex-col gap-3'}>
      {filters.searchString.length && filters.wordsFilteredCount === 0
        ? <span>Слово <span className="text-red-500 font-bold">{filters.searchString}</span> не найдено.😞</span>
        : <div
          ref={containerRef}
          className="overflow-auto border border-gray-700 rounded-lg"
          style={{ maxHeight: tableHeight }}
        >
          <table className={clsx('table', 'w-full', 'sm:w-1/2')}>
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

          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className={'btn btn-circle fixed bottom-6 right-6 bg-primary text-white hover:bg-primary-focus'}
              style={{
                width: '3rem',
                height: '3rem',
                fontSize: '1.3rem'
              }}
            >↑</button>
          )}

        </div>
      }
    </div>
  )
}

export default WordsTable