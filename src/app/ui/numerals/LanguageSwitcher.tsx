/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 29.01.2025
 */
import { JSX } from 'react'
import Image from 'next/image'
import { LANGUAGE_MODE } from '@/app/lib/utils'

interface LanguageSwitcherProps {
  kgMode: boolean;
  setKgMode: (mode: boolean) => void;
}

const LanguageSwitcher = ({ kgMode, setKgMode }: LanguageSwitcherProps): JSX.Element => {
  return (
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
  )
}

export default LanguageSwitcher