/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { JSX } from 'react'
import Link from 'next/link'
import { LANGUAGE_MODE } from '@/app/lib/utils'
import { $filters, Filters } from '@/app/lib/effector/filter'
import { useUnit } from 'effector-react'
import LanguageButton from '@/app/ui/home/filter/languagesButton/LanguageButton'

const LanguagesButton = (): JSX.Element => {
  const filters: Filters = useUnit($filters)

  return (
    <>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.KG}/${filters.selectedTag}`
        }}>
        <LanguageButton isKg={true}/>
      </Link>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.EN}/${filters.selectedTag}`
        }}>
        <LanguageButton isKg={false}/>
      </Link>
    </>
  )
}

export default LanguagesButton