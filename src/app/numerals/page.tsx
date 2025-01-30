/**
 * Компонент страницы с числительными.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import SoundButtons from '@/app/ui/numerals/SoundButtons'
import LanguageSwitcher from '@/app/ui/numerals/LanguageSwitcher'
import Interactive from '@/app/ui/numerals/Interactive'

const NumeralsPage = (): JSX.Element => {
  const [kgMode, setKgMode] = useState<boolean>(true)

  return (
    <div className={'flex flex-col gap-3'}>
      <LanguageSwitcher kgMode={kgMode} setKgMode={setKgMode}/>
      <SoundButtons kgMode={kgMode}/>
      <Interactive/>
    </div>
  )
}

export default NumeralsPage