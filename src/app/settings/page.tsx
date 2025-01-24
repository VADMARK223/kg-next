/**
 * Компонент страницы настроек.
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import AnswerCountSlider from '@/app/settings/AnswerCountSlider'

const Page = (): JSX.Element => {
  return (
    <>
      <AnswerCountSlider/>
    </>
  )
}

export default Page