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
import Image from 'next/image'
import { useUnit } from 'effector-react/compat'
import { $settings } from '@/app/lib/effector/settings'

interface QuizPageProps {
  params: Promise<{ tag: string, mode: string }>
}
// Случайное перемешивание массива
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5)

const QuizPage = ({ params }: QuizPageProps): JSX.Element => {
  const settings = useUnit($settings)
  const [totalSteps, setTotalSteps] = useState<number>(settings.questionCount)
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const { tag, mode } = use(params)

  const [tagName, setTagName] = useState<string>('')
  const [words, setWords] = useState<Word[]>([])
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Word | null>(null)
  const [history, setHistory] = useState<QuizHistory[]>([])
  const [title, setTitle] = useState<string>('')
  const [usedQuestions, setUsedQuestions] = useState<Word[]>([]) // Добавлен массив использованных вопросов

  useEffect(() => {
    if (currentStep === totalSteps) {
      setTitle(`Ваши результаты: ${score}/${totalSteps}`)
    } else {
      setTitle(`Вопрос ${currentStep + 1} из ${totalSteps}.`)
    }

  }, [score, currentStep, totalSteps])

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

  const generateQuestion = () => {
    if (words.length === 0) {
      throw new Error('Массив WORDS пуст. Добавьте слова в массив.')
    }

    // Фильтрация слов, которые уже использовались
    const availableWords = words.filter(word => !usedQuestions.includes(word))
    if (availableWords.length === 0) {
      throw new Error('Все вопросы уже были заданы.')
    }

    const currentWord = availableWords[Math.floor(Math.random() * availableWords.length)]
    const incorrectAnswers = shuffleArray(
      words.filter((word) => {
        if (mode === LANGUAGE_MODE.KG) {
          return (word.kg !== currentWord.kg)
        } else {
          return (word.en !== currentWord.en)
        }
      })
    )
      .slice(0, settings.answerCount - 1)
      .map((word) => mode === LANGUAGE_MODE.KG ? word.kg : word.en)

    const options = shuffleArray([mode === LANGUAGE_MODE.KG ? currentWord.kg : currentWord.en, ...incorrectAnswers])
    setShuffledOptions(options)
    setUsedQuestions((prev: Word[]) => [...prev, currentWord])
    return currentWord
  }

  useEffect(() => {
    if (words.length === 0) {
      return
    }
    setCurrentQuestion(generateQuestion())
    setTotalSteps(Math.min(settings.questionCount, words.length))
  }, [words, settings.questionCount])

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

    if (currentStep - 1 <= totalSteps) {
      setCurrentStep(currentStep + 1)
    }

    if (usedQuestions.length < totalSteps) {
      setCurrentQuestion(generateQuestion())
    }
  }

  const handlerDone = (): void => {
    setCurrentStep(0)
    setScore(0)
    setHistory([]) // Очистка истории ответов
    setUsedQuestions([]) // Очистка использованных слов
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Опрос по категории: <span>{`"${tagName}".`}</span></h1>
      <h1>Язык: {mode === LANGUAGE_MODE.KG ?
        <Image src={`/${LANGUAGE_MODE.KG}.png`} alt="Kyrgyzstan" width={40} height={24} priority
               style={{ display: 'inline' }}/> :
        <Image src={`/${LANGUAGE_MODE.EN}.png`} alt="Kyrgyzstan" width={40} height={24} priority
               style={{ display: 'inline' }}/>}</h1>
      <h1>{title}</h1>
      {currentStep === totalSteps
        ? <>
          {history.map((history, index) => (
            <ResultItem isCorrect={history.answer === history.correct} key={index} index={index} history={history}/>
          ))}
          <div className={'pt-3'}>
            <button className={'btn btn-primary'} onClick={handlerDone}>Понятно! Еще раз!</button>
          </div>
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