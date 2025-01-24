/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { JSX } from 'react'
import Image from 'next/image'
import { LANGUAGE_MODE } from '@/app/lib/utils'

interface LanguageButtonProps {
  isKg: boolean
}

const LanguageButton = ({isKg}:LanguageButtonProps): JSX.Element => {
  return (
    <>
      {isKg
        ? <button className={'btn btn-primary inline-flex'}>
          Учить <Image src={`/${LANGUAGE_MODE.KG}.png`} alt="Kyrgyzstan" width={40} height={24}/>
        </button>
        : <button className={'btn btn-primary inline-flex'}>
          Учить <Image src={`/${LANGUAGE_MODE.EN}.png`} alt="Great Britain" width={40} height={20}/>
        </button>}
    </>
  )
}

export default LanguageButton