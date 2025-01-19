/**
 * Компонент элемента результатов опроса.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { JSX } from 'react'
import { QuizHistory } from '@/app/lib/model/QuizHistory'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ResultItemProps {
  isCorrect: boolean
  index: number
  history: QuizHistory
}

const ResultItem = ({ isCorrect, index, history }: ResultItemProps): JSX.Element => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <hr className={'border-t border-gray-700'}/>
      {isCorrect ? (
        <span>
          <CheckIcon className="text-green-500 inline h-5 w-5 mr-1" />
          {index + 1}) Как переводится: <b>&quot;{history.question}&quot;</b>?
          <br/>
          Правильный ответ: <span className={'text-green-500'}>{history.correct}</span>
        </span>
      ) : (
        <span>
          <XMarkIcon className="text-red-500 inline h-5 w-5 mr-1" />
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