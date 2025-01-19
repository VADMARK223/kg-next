/**
 * Компонент кнопки в флагом
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { JSX } from 'react'
import Image from 'next/image'
import { LANGUAGE_MODE } from '@/app/lib/utils'
interface LanguageButtonProp {
  isKg:boolean
}

const LanguageButton = ({isKg}:LanguageButtonProp): JSX.Element => {
  return (
    <>
      {isKg ? <button className={'btn btn-primary'}>
        Учить <Image src={`/${LANGUAGE_MODE.KG}.png`} alt="Kyrgyzstan" width={40} height={24} priority/>
      </button> : <button className={'btn btn-primary'}>
        Учить <Image src={`/${LANGUAGE_MODE.EN}.png`} alt="Great Britain" width={40} height={24} priority/>
      </button>}
    </>
  )
}

export default LanguageButton