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
  { name: 'Дом', href: '/' },
  { name: 'Настройки', href: '/settings' }
]

const Menu = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <div className={'flex gap-3'}>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <button className={clsx('btn', { 'btn-primary': pathname === link.href }) }>
              {link.name}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu