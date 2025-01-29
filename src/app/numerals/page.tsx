/**
 * Компонент страницы с числительными.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

const sounds = [
  { id: 0, label: 'Нөл (Ноль)', file: '/sound/0.mp3' },
  { id: 1, label: 'Бир (Один)', file: '/sound/1.mp3' },
  { id: 2, label: 'Эки (Два)', file: '/sound/2.mp3' },
  { id: 3, label: 'Үч (Три)', file: '/sound/3.mp3' },
  { id: 4, label: 'Төрт (Четыре)', file: '/sound/4.mp3' },
  { id: 5, label: 'Беш (Пять)', file: '/sound/5.mp3' },
  { id: 6, label: 'Алты (Шесть)', file: '/sound/6.mp3' },
  { id: 7, label: 'Жети (Семь)', file: '/sound/7.mp3' },
  { id: 8, label: 'Сегиз (Восемь)', file: '/sound/8.mp3' },
  { id: 9, label: 'Тогуз (Девять)', file: '/sound/9.mp3' },
  { id: 10, label: 'Он (Десять)', file: '/sound/10.mp3' },
  { id: 20, label: 'Жыйырма (Двадцать)', file: '/sound/20.mp3' },
  { id: 30, label: 'Отуз (Тридцать)', file: '/sound/30.mp3' },
  { id: 40, label: 'Кырк (Сорок)', file: '/sound/40.mp3' },
  { id: 50, label: 'Элүү (Пятьдесят)', file: '/sound/50.mp3' },
  { id: 60, label: 'Алтмыш (Шестьдесят)', file: '/sound/60.mp3' },
  { id: 70, label: 'Жетмиш (Семьдесят)', file: '/sound/70.mp3' },
  { id: 80, label: 'Сексен (Восемьдесят)', file: '/sound/80.mp3' },
  { id: 90, label: 'Токсон (Девяносто)', file: '/sound/90.mp3' },
  { id: 100, label: 'Жүз (Сто)', file: '/sound/100.mp3' },
  { id: 1000, label: 'Миң (Тысяча)', file: '/sound/1000.mp3' }
]

const NumeralsPage = (): JSX.Element => {
  const [audios, setAudios] = useState<Record<number, HTMLAudioElement>>({})

  useEffect(() => {
    const audioMap = sounds.reduce((acc, sound) => {
      acc[sound.id] = new Audio(sound.file)
      return acc
    }, {} as Record<number, HTMLAudioElement>)
    setAudios(audioMap)
  }, [])

  const playSound = (id: number) => {
    const audio = audios[id]
    if (audio) {
      audio.currentTime = 0
      audio.play()
    }
  }

  return (
    <div className={'flex flex-wrap gap-2 w-full'}>
      {sounds.map((sound) => (
        <button
          key={sound.id}
          onClick={() => playSound(sound.id)}
          className={'btn btn-primary'}
        >
          <PlayIcon className={'h-5 w-5 text-white'}/>
          {sound.label}
        </button>
      ))}
    </div>
  )
}

export default NumeralsPage