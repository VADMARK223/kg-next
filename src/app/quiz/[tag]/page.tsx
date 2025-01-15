/**
 * Компонент страницы опроса.
 *
 * @author Markitanov Vadim
 * @since 12.01.2025
 */
'use client'
import { JSX, use, useEffect, useState } from 'react'
import { fetchTagsByIdCommon, fetchWordsLocal } from '@/app/api/api'
import { Word } from '@/app/lib/model/word'

interface QuizPageProps {
  params: Promise<{ tag: string }>
}

// Случайное перемешивание массива
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5)

const QuizPage = ({ params }: QuizPageProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const { tag } = use(params)
  const [tagName, setTagName] = useState<string>('')
  const [words, setWords] = useState<Word[]>([])
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Word | null>(null)
  const [history, setHistory] = useState<{ question: string; correct: string; answer: string }[]>([]) // История ответов

  const totalSteps = 5

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

  useEffect(() => {
    if (words.length > 0) {
      setCurrentQuestion(generateQuestion())
    }
  }, [words])

  const generateQuestion = () => {
    if (words.length === 0) {
      throw new Error('Массив WORDS пуст. Добавьте слова в массив.')
    }

    const currentWord = words[Math.floor(Math.random() * words.length)]
    const incorrectAnswers = shuffleArray(
      words.filter((word) => word.kg !== currentWord.kg)
    )
      .slice(0, 3)
      .map((word) => word.kg)

    const options = shuffleArray([currentWord.kg, ...incorrectAnswers])
    setShuffledOptions(options)
    return currentWord
  }

  const handleAnswer = (answer: string) => {
    if (currentQuestion == null) {
      return
    }

    const isCorrect = answer === currentQuestion.kg
    setScore((prev) => prev + (isCorrect ? 1 : 0))
    setHistory((prev) => [
      ...prev,
      {
        question: currentQuestion.ru,
        correct: currentQuestion.kg,
        answer: answer
      }
    ])

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      setCurrentQuestion(generateQuestion())
    } else {
      // Отобразить результаты
      alert(`Опрос завершён! Ваш результат: ${score + (isCorrect ? 1 : 0)}/${totalSteps}`)
      console.log('История ответов:', history) // Временно для отладки
      showResults()
    }
  }

  const showResults = () => {
    const resultMessage = history
      .map(
        (entry, index) =>
          `Вопрос ${index + 1}: "${entry.question}"\nВаш ответ: ${entry.answer}\nПравильный ответ: ${entry.correct}\n`
      )
      .join('\n')

    alert(`Результаты:\n\n${resultMessage}`)
    // Сброс состояния для нового опроса
    setCurrentStep(0)
    setScore(0)
    setHistory([])
    setCurrentQuestion(generateQuestion())
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Опрос по категории: {tagName}</h1>
      <h1>Вопрос {currentStep + 1} из {totalSteps}</h1>
      <h2><b>Как перевести слово:</b> <span style={{ textDecoration: 'underline' }}>{currentQuestion?.ru}</span>?</h2>
      <div>
        {shuffledOptions.map((option, index) => (
          <button
            className={'btn btn-primary'}
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizPage
