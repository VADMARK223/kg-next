/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { $settings, questionCountUpdated } from '@/app/lib/effector/settings'
import { useUnit } from 'effector-react/compat'

const QuestionCountSlider = (): JSX.Element => {
  const settings = useUnit($settings)
  const [value, setValue] = useState<number>(settings.answerCount)

  return (
    <div className="w-full max-w-xs">
      <ValueViewer name={'Кол-во вопросов в опроснике'} value={value}/>
      <input type="range"
             min={3}
             max={6}
             value={value}
             className="range"
             onChange={event => {
               setValue(Number(event.target.value))
               questionCountUpdated(Number(event.target.value))
             }}
             step={1}/>
    </div>
  )
}

export default QuestionCountSlider