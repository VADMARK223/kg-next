/**
 * Компонент главного меню.
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
'use client'
import React, { JSX, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CalculatorIcon, CogIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { isMobileUpdated } from '@/app/lib/effector/settings'
import { Button } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import clsx from 'clsx'

const SHOW_OLD_MENU: boolean = true

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
  { ...defaultLinkData, name: 'Числа', href: '/numerals', icon: CalculatorIcon },
  { ...defaultLinkData, name: 'О программе', href: '/about', icon: InformationCircleIcon, showMobileLabel: false },
  { ...defaultLinkData, name: 'Настройки', href: '/settings', icon: CogIcon, showMobileLabel: false },
  { ...defaultLinkData, name: 'ПДД', href: '/pdd', available: false },
  { ...defaultLinkData, name: 'Пересоздать БД', href: '/api/init' },
  { ...defaultLinkData, name: 'Тест', href: '/api/test' }
]

interface MenuProps {
  isMobile: boolean
}

const Menu = ({ isMobile }: MenuProps): JSX.Element => {
  const pathname = usePathname()

  useEffect(() => {
    isMobileUpdated(isMobile)
  }, [isMobile])

  const getVisibleLabel = (link: LinkData): boolean => {
    if (isMobile) {
      return link.showMobileLabel ?? true
    } else {
      return true
    }
  }

  return (
    <div className={'flex gap-3'}>
      {links.map((link) => {
        if (link.href === '/api/init' || link.href === '/api/test' || link.href === '/pdd') {
          return null
        }

        const Icon = link.icon

        return (
          <Link key={link.name} href={link.href}>
            {SHOW_OLD_MENU ? <button className={clsx('btn btn-primary', { 'text-gray-350': pathname !== link.href })}
                                     disabled={!link.available}>
                {Icon && <Icon className={'h-5 w-5 text-white'}/>}
                {getVisibleLabel(link) && (
                  <span className={clsx({ 'border-b-3': pathname === link.href })} style={{ whiteSpace: 'nowrap' }}>
                  {link.name}
                </span>
                )}
              </button>
              : <Button
                icon={Icon && <Icon className={'h-5 w-5 text-white'}/>}
                type={'primary'}
              >
                {link.name}
              </Button>}
          </Link>
        )
      })}
    </div>
  )
}

export default Menu