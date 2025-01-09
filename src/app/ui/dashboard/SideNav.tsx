/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/NavLinks'

const SideNav = (): JSX.Element => {
  return (
    <div className={'flex gap-3'}>
      <Link href="/">
        Home
      </Link>
      <div>
        <NavLinks/>
      </div>
    </div>
  )
}

export default SideNav