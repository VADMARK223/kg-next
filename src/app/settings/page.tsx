/**
 * Компонент страницы настроек.
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import AnswerCountSlider from '@/app/settings/AnswerCountSlider'
import QuestionCountSlider from '@/app/settings/QuestionCountSlider'

const Page = (): JSX.Element => {
  return (
    <>
      <AnswerCountSlider/>
      <QuestionCountSlider/>
    </>
  )
}

export default Page