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
import { isDevMode } from '@/app/lib/utils'

const links = [
  { name: 'Словарь', href: '/' },
  { name: 'О программе', href: '/about' },
  { name: 'Числительные', href: '/numerals' },
  { name: 'Пересоздать БД', href: '/flyway' },
  { name: 'Настройки', href: '/settings' }
]

const Menu = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <div className={'flex flex-wrap gap-3'}>
      {links.map((link) => {
        if (link.href === '/flyway' && !isDevMode()) {
          return null
        }

        return (
          <Link key={link.name} href={link.href}>
            {/*<button className={clsx('btn', { 'btn-primary': pathname === link.href })}
                    disabled={link.href === '/settings' || link.href === '/numerals'}
            >*/}
            <button className={clsx('btn btn-primary', { 'text-gray-350': pathname !== link.href })}
                    disabled={link.href === '/settings' || link.href === '/numerals'}
            >
              <span className={clsx({'border-b-3' : pathname === link.href})}>
              {link.name}
              </span>
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu