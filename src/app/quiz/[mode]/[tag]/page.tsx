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
import ResultItem from '@/app/ui/quiz/ResultItem'
import { QuizHistory } from '@/app/lib/model/QuizHistory'
import { LANGUAGE_MODE } from '@/app/lib/utils'

interface QuizPageProps {
  params: Promise<{ tag: string, mode: string }>
}

const TOTAL_STEPS = 5
const ANSWERS_COUNT = 5

// Случайное перемешивание массива
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5)

const QuizPage = ({ params }: QuizPageProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const { tag, mode } = use(params)

  const [tagName, setTagName] = useState<string>('')
  const [words, setWords] = useState<Word[]>([])
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Word | null>(null)
  const [history, setHistory] = useState<QuizHistory[]>([])
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (currentStep === TOTAL_STEPS) {
      setTitle(`Ваши результаты: ${score}/${TOTAL_STEPS}`)
    } else {
      setTitle(`Вопрос ${currentStep + 1} из ${TOTAL_STEPS}.`)
    }

  }, [score, currentStep])

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
      words.filter((word) => {
        if (mode === LANGUAGE_MODE.KG) {
          return (word.kg !== currentWord.kg)
        } else {
          return (word.en !== currentWord.en)
        }
      })
    )
      .slice(0, ANSWERS_COUNT - 1)
      .map((word) => mode === LANGUAGE_MODE.KG ? word.kg : word.en)

    const options = shuffleArray([mode === LANGUAGE_MODE.KG ? currentWord.kg : currentWord.en, ...incorrectAnswers])
    setShuffledOptions(options)
    return currentWord
  }

  const isCorrect = (currentQuestion: Word | null, answer: string): boolean => {
    if (currentQuestion == null) {
      throw new Error('Current question was not found.')
    }

    return mode === LANGUAGE_MODE.KG ? answer === currentQuestion.kg : answer === currentQuestion.en
  }

  const handleAnswer = (answer: string) => {
    if (currentQuestion == null) {
      return
    }

    setScore((prev) => prev + (isCorrect(currentQuestion, answer) ? 1 : 0))
    setHistory((prev) => [
      ...prev,
      {
        question: currentQuestion.ru,
        correct: mode === LANGUAGE_MODE.KG ? currentQuestion.kg : currentQuestion.en,
        answer: answer
      }
    ])

    if (currentStep - 1 <= TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }

    setCurrentQuestion(generateQuestion())
  }

  const handlerDone = (): void => {
    setCurrentStep(0)
    setScore(0)
    setHistory([])
    setCurrentQuestion(generateQuestion())
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Опрос по категории: <span>{`"${tagName}".`}</span></h1>
      <h1>Язык: {mode === LANGUAGE_MODE.KG ? 'Кыргызский' : 'Английский'}</h1>
      <h1>{title}</h1>
      {currentStep === TOTAL_STEPS
        ? <>
          {history.map((history, index) => (
            <ResultItem isCorrect={history.answer === history.correct} key={index} index={index} history={history}/>
          ))}
          <button className={'btn btn-primary'} onClick={handlerDone}>Понятно!</button>
        </>
        : <>
          <h2>Как перевести слово: <span className={'font-bold underline'}>{currentQuestion?.ru}</span>?</h2>
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
        </>}

    </div>
  )
}

export default QuizPage