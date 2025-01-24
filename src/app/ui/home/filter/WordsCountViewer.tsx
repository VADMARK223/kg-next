/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { JSX } from 'react'
import { isDevMode } from '@/app/lib/utils'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Word } from '@/app/lib/model/word'
import { useUnit } from 'effector-react'
import { $words } from '@/app/lib/effector/word'

const WordsCountViewer = (): JSX.Element => {
  const words: Word[] = useUnit($words)

  return (
    <div>
      {(isDevMode() ?? false) && <ValueViewer name={'Слов'} value={words.length}/>}
    </div>
  )
}

export default WordsCountViewer