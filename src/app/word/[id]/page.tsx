/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, use, useEffect, useState } from 'react'

interface WordPageProps {
  params: Promise<{ id: string }>
}

const WordPage = ({ params }: WordPageProps): JSX.Element => {
  const { id } = use(params)
  const [wordId, setWordId] = useState('')

  useEffect(() => {
    setWordId(id)
  }, [id])

  return (
    <div>
      Страница слова: {wordId}
    </div>
  )
}

export default WordPage