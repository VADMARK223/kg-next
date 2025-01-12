/**
 * Компонент страницы опроса.
 *
 * @author Markitanov Vadim
 * @since 12.01.2025
 */
import { JSX, use } from 'react'

interface QuizPageProps {
  params: Promise<{ tag: string }>
}

const QuizPage = ({ params }: QuizPageProps): JSX.Element => {
  const { tag } = use(params)

  return (
    <div>
      Опрос по категории: {tag}
    </div>
  )
}

export default QuizPage