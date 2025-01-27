import type { Metadata } from 'next'
import { inter } from './ui/fonts'
import './ui/globals.css'
import React from 'react'
import Menu from '@/app/ui/home/menu/Menu'

export const metadata: Metadata = {
  title: 'Портал изучения слов',
  description: 'Сайт для изучения кыргызского и английского'
}

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased m-3`}>
    <header id={'kg-header'} className={'fixed w-full top-0 left-0 z-50 bg-base-100 shadow-md p-3'}>
      <Menu/>
    </header>
    <div className={'mt-[64px]'}>
      {children}
    </div>
    </body>
    </html>
  )
}
