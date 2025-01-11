/**
 * Компонент главного меню.
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

type LinkData = {
  name: string
  href: string
  available?: boolean
}

const defaultLinkData: Partial<LinkData> = { available: true }

const links: LinkData[] = [
  { ...defaultLinkData, name: 'Словарь', href: '/' },
  { ...defaultLinkData, name: 'О программе', href: '/about' },
  { ...defaultLinkData, name: 'Числительные', href: '/numerals', available: false },
  { ...defaultLinkData, name: 'Пересоздать БД', href: '/api/init' },
  { ...defaultLinkData, name: 'Тест', href: '/api/test' },
  { ...defaultLinkData, name: 'Настройки', href: '/settings', available: false }
]

const Menu = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <div className={'flex flex-wrap gap-3'}>
      {links.map((link) => {
        if ((link.href === '/api/init' || link.href === '/api/test') && !isDevMode()) {
          return null
        }

        return (
          <Link key={link.name} href={link.href}>
            <button className={clsx('btn btn-primary', { 'text-gray-350': pathname !== link.href })}
                    disabled={!link.available}
            >
              <span className={clsx({ 'border-b-3': pathname === link.href })}>
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