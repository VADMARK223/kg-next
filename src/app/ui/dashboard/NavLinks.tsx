/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
'use client'

import { JSX } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Invoice', href: '/dashboard/invoices' },
  { name: 'Customers', href: '/dashboard/customers' }
]

const NavLinks = (): JSX.Element => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className={'flex gap-3'}>
      {links.map((link) => {
        return (
          <Link key={link.name}
                href={link.href}
                className={clsx(
                  {
                    'text-sky-300': pathname === link.href
                  }
                )}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks