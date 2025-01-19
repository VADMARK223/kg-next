import type { Metadata } from 'next'
import { inter } from './ui/fonts'
import './ui/globals.css'
import Header from '@/app/ui/home/header/Header'

export const metadata: Metadata = {
  title: 'Портал изучения слов',
  description: 'Сайт для изучения кыргызского и английского'
}

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased m-3`}>
    <Header/>
    <div className={'mt-3'}>
      {children}
    </div>
    </body>
    </html>
  )
}
