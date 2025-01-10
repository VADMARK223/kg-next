/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { JSX } from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'

const Page = (): JSX.Element => {
  return (
    <div>
      <HomeIcon className={'size-6 text-blue-500'}/>
    </div>
  )
}

export default Page