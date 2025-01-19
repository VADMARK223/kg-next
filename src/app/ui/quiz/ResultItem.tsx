/**
 * Компонент элемента результатов опроса.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { JSX } from 'react'
import { QuizHistory } from '@/app/lib/model/QuizHistory'

interface ResultItemProps {
  isCorrect: boolean
  index: number
  history: QuizHistory
}

const ResultItem = ({ isCorrect, index, history }: ResultItemProps): JSX.Element => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <hr/>
      {isCorrect ? (
        <span>
          {index + 1}) Как переводится: <b>&quot;{history.question}&quot;</b>?
          <br/>
          Правильный ответ: <span className={'text-green-500'}>{history.correct}</span>
        </span>
      ) : (
        <span>
          {index + 1}) Как переводится: <b>&quot;{history.question}&quot;</b>?
          <br/>
          Ваш ответ: <span className={'text-red-500'}>{history.answer}</span>
          <br/>
          Правильный ответ: <span className={'text-green-500'}>{history.correct}</span>
        </span>
      )}
    </div>
  )
}

export default ResultItem