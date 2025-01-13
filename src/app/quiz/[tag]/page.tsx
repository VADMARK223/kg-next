/**
 * Компонент страницы опроса.
 *
 * @author Markitanov Vadim
 * @since 12.01.2025
 */
'use client'
import { JSX, use, useEffect, useState } from 'react'
import { fetchTagsByIdCommon, fetchWordsLocal } from '@/app/api/api'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Word } from '@/app/lib/model/word'

interface QuizPageProps {
  params: Promise<{ tag: string }>
}

const QuizPage = ({ params }: QuizPageProps): JSX.Element => {
  const { tag } = use(params)
  const [tagName, setTagName] = useState<string>('')
  const [words, setWords] = useState<Word[]>([])

  useEffect(() => {
    const tagId: number = Number(tag)
    const words = fetchWordsLocal(tagId)
    if (tag === '0') {
      setTagName('Все')
    } else {
      fetchTagsByIdCommon(tagId).then(value => setTagName(value.name))
    }
    setWords(words)
  }, [tag])

  return (
    <div className={'flex flex-col gap-3'}>
      <ValueViewer name={'Опрос по категории'} value={tagName}/>
      <ValueViewer name={'Слов'} value={words.length}/>
    </div>
  )
}

export default QuizPage