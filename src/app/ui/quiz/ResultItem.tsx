/**
 * Компонент элемента результатов опроса.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { JSX } from 'react'
import { QuizHistory } from '@/app/lib/model/QuizHistory'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

interface ResultItemProps {
  isCorrect: boolean
  index: number
  history: QuizHistory
}

const ResultItem = ({ isCorrect, index, history }: ResultItemProps): JSX.Element => {
  return (
    <div style={{ paddingTop: '10px' }}>
      <hr className={'border-t border-gray-700'}/>
      <span>
          {isCorrect
            ? <CheckIcon className="text-green-500 inline h-6 w-6 mr-1"/>
            : <XMarkIcon className="text-red-500 inline h-6 w-6 mr-1"/>}
        {index + 1}) Как переводится: <b>&quot;{history.question}&quot;</b>?
          <br/>
          Правильный ответ: <span className={'text-green-500'}>{history.correct}</span>
        </span>
      {!isCorrect && (
        <span>
          <br/>
          Ваш ответ: <span className={'text-red-500'}>{history.answer}</span>
        </span>
      )}
    </div>
  )
}

export default ResultItem