/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import { useUnit } from 'effector-react/compat'
import { $settings, answerCountUpdated } from '@/app/lib/effector/settings'
import ValueViewer from '@/app/ui/common/ValueViewer'

const AnswerCountSlider = (): JSX.Element => {
  const settings = useUnit($settings)
  const [value, setValue] = useState<number>(settings.answerCount)

  return (
    <div className="w-full max-w-xs">
      <ValueViewer name={'Кол-во ответов в вопросе'} value={value} />
      <input type="range"
             min={4}
             max={10}
             value={value}
             className="range"
             onChange={event => {
               setValue(Number(event.target.value))
               answerCountUpdated(Number(event.target.value))
             }}
             step={1}/>
    </div>
  )
}

export default AnswerCountSlider