/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 17.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'

const WordsTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 300)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && <button
          onClick={scrollToTop}
          className={'btn btn-circle fixed bottom-4 right-4 bg-primary text-white hover:bg-primary-focus'}
          style={{
            width: '4rem',
            height: '4rem',
            fontSize: '1.5rem'
          }}
      >
          ↑
      </button>}
    </>
  )
}

export default WordsTopButton