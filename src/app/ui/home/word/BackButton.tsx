/**
 * Компонент кнопки назад.
 *
 * @author Markitanov Vadim
 * @since 25.01.2025
 */
import { JSX } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { selectedTagModeUpdated, selectedTagUpdated } from '@/app/lib/effector/filter'

const BackButton = (): JSX.Element => {
  return (
    <th>
      <button className={'btn btn-primary btn-sm'} onClick={() => {
        selectedTagUpdated(0)
        selectedTagModeUpdated(false)
      }}>
        <ArrowLeftIcon className="h-5 w-5"/>
        Назад
      </button>
    </th>
  )
}

export default BackButton