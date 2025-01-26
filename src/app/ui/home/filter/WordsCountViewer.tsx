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
    <>
      {(isDevMode() ?? false) && <ValueViewer name={'Слов отображается'} value={filters.wordsFilteredCount}/>}
    </>
  )
}

export default WordsCountViewer