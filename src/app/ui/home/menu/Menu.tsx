/**
 * Компонент главного меню.
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
'use client'
import { JSX, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { CalculatorIcon, CogIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { $settings, isMobileUpdated } from '@/app/lib/effector/settings'
import { useUnit } from 'effector-react'

type LinkData = {
  name: string
  href: string
  available?: boolean
  showMobileLabel?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

const defaultLinkData: Partial<LinkData> = {
  showMobileLabel: true,
  available: true
}

const links: LinkData[] = [
  { ...defaultLinkData, name: 'Словарь', href: '/', icon: HomeIcon },
  { ...defaultLinkData, name: 'Числительные', href: '/numerals', icon: CalculatorIcon, available: false },
  { ...defaultLinkData, name: 'О программе', href: '/about', icon: InformationCircleIcon, showMobileLabel: false },
  { ...defaultLinkData, name: 'Настройки', href: '/settings', icon: CogIcon, showMobileLabel: false },
  { ...defaultLinkData, name: 'ПДД', href: '/pdd', available: false },
  { ...defaultLinkData, name: 'Пересоздать БД', href: '/api/init' },
  { ...defaultLinkData, name: 'Тест', href: '/api/test' }
]

const Menu = (): JSX.Element => {
  const settings = useUnit($settings)
  const pathname = usePathname()

  useEffect(() => {
    const userAgent = navigator.userAgent || ''
    isMobileUpdated(/Mobi|Android|iPhone/i.test(userAgent))
  }, [])

  const getVisibleLabel = (link: LinkData): boolean => {
    if (settings.isMobile) {
      return link.showMobileLabel ?? true
    } else {
      return true
    }
  }

  return (
    <div className={'flex flex-wrap gap-3'}>
      {links.map((link) => {
        if (link.href === '/api/init' || link.href === '/api/test' || link.href === '/pdd') {
          return null
        }

        const Icon = link.icon

        return (
          <Link key={link.name} href={link.href}>
            <button className={clsx('btn btn-primary', { 'text-gray-350': pathname !== link.href })}
                    disabled={!link.available}>
              {Icon && <Icon className={'h-5 w-5 text-white'}/>}
              {getVisibleLabel(link) && <span className={clsx({ 'border-b-3': pathname === link.href })}>
              {link.name}
              </span>}
            </button>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu