/**
 * Компонент страницы с числительными.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import Image from 'next/image'
import { LANGUAGE_MODE } from '@/app/lib/utils'
import SoundButtons from '@/app/ui/numerals/SoundButtons'

const NumeralsPage = (): JSX.Element => {
  const [kgMode, setKgMode] = useState<boolean>(true)

  return (
    <div className={'flex flex-col gap-3'}>
      <div className="flex items-center gap-3">
        Язык:
        <Image src={`/${LANGUAGE_MODE.EN}.png`} alt="Great Britain" width={40} height={24}/>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={kgMode}
          onChange={(e) => setKgMode(e.target.checked)}
        />
        <Image src={`/${LANGUAGE_MODE.KG}.png`} alt="Kyrgyzstan" width={40} height={24}/>
      </div>
      <SoundButtons kgMode={kgMode}/>
    </div>
  )
}

export default NumeralsPage