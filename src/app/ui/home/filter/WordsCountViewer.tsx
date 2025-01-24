/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { JSX } from 'react'
import { isDevMode } from '@/app/lib/utils'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { useUnit } from 'effector-react'
import { $filters, Filters } from '@/app/lib/effector/filter'

const WordsCountViewer = (): JSX.Element => {
  const filters: Filters = useUnit($filters)

  return (
    <div>
      {(isDevMode() ?? false) && <ValueViewer name={'Слов'} value={filters.wordsFilteredCount}/>}
    </div>
  )
}

export default WordsCountViewer