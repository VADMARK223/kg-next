/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 13.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Word } from '@/app/lib/model/word'

interface QiuzProps {
  words: Word[]
}

const Quiz = ({words}:QiuzProps): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  return (
    <div>
      <ValueViewer name={'Шаг'} value={currentStep}/>
      <button className={'btn ' +
        'btn-primary'} onClick={() => setCurrentStep(currentStep + 1)}>Дальше</button>
      <ValueViewer name={'слов'} value={words.length}/>
    </div>
  )
}

export default Quiz