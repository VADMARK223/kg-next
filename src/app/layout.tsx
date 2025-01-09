import type { Metadata } from 'next'
import { inter } from './ui/fonts'
import './ui/globals.css'
import Header from '@/app/ui/home/Header'

export const metadata: Metadata = {
  title: 'Изучение кыргызского языка',
  description: 'Сайт для изучения кыргызского языка'
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
