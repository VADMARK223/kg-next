/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 29.01.2025
 */
import { JSX, useEffect, useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { SoundData } from '@/app/lib/model/SoundData'

const sounds: SoundData[] = [
  { id: 0, ru: '0', kg: 'Нөл', en: 'Zero', file: '/sound/0.mp3' },
  { id: 1, ru: '1', kg: 'Бир', en: 'One', file: '/sound/1.mp3' },
  { id: 2, ru: '2', kg: 'Эки', en: 'Two', file: '/sound/2.mp3' },
  { id: 3, ru: '3', kg: 'Үч', en: 'Three', file: '/sound/3.mp3' },
  { id: 4, ru: '4', kg: 'Төрт', en: 'Four', file: '/sound/4.mp3' },
  { id: 5, ru: '5', kg: 'Беш', en: 'Five', file: '/sound/5.mp3' },
  { id: 6, ru: '6', kg: 'Алты', en: 'Six', file: '/sound/6.mp3' },
  { id: 7, ru: '7', kg: 'Жети', en: 'Seven', file: '/sound/7.mp3' },
  { id: 8, ru: '8', kg: 'Сегиз', en: 'Eight', file: '/sound/8.mp3' },
  { id: 9, ru: '9', kg: 'Тогуз', en: 'Nine', file: '/sound/9.mp3' },
  { id: 10, ru: '10', kg: 'Он', en: 'Ten', file: '/sound/10.mp3' },
  { id: 20, ru: '20', kg: 'Жыйырма', en: 'Twenty', file: '/sound/20.mp3' },
  { id: 30, ru: '30', kg: 'Отуз', en: 'Thirty', file: '/sound/30.mp3' },
  { id: 40, ru: '40', kg: 'Кырк', en: 'Forty', file: '/sound/40.mp3' },
  { id: 50, ru: '50', kg: 'Элүү', en: 'Fifty', file: '/sound/50.mp3' },
  { id: 60, ru: '60', kg: 'Алтымыш', en: 'Sixty', file: '/sound/60.mp3' },
  { id: 70, ru: '70', kg: 'Жетимиш', en: 'Seventy', file: '/sound/70.mp3' },
  { id: 80, ru: '80', kg: 'Сексен', en: 'Eighty', file: '/sound/80.mp3' },
  { id: 90, ru: '90', kg: 'Токсон', en: 'Ninety', file: '/sound/90.mp3' },
  { id: 100, ru: '100', kg: 'Жүз', en: 'One hundred', file: '/sound/100.mp3' },
  { id: 1000, ru: '1000', kg: 'Миң', en: 'One thousand', file: '/sound/1000.mp3' }
]

interface SoundButtonsProps {
  kgMode: boolean;
}

const SoundButtons = ({ kgMode }: SoundButtonsProps): JSX.Element => {
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
    <div className={'flex flex-wrap gap-1 w-full'}>
      {sounds.map((sound) => (
        <button
          key={sound.id}
          onClick={() => playSound(sound.id)}
          className={'btn btn-primary'}
        >
          <PlayIcon className={'h-5 w-5 text-white'}/>
          {`${sound.ru} - ${kgMode ? sound.kg : sound.en}`}
        </button>
      ))}
    </div>
  )
}

export default SoundButtons