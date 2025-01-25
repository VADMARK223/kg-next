/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import { LANGUAGE_MODE } from '@/app/lib/utils'
import { $filters, Filters } from '@/app/lib/effector/filter'
import { useUnit } from 'effector-react'
import LanguageButton from '@/app/ui/home/filter/languagesButton/LanguageButton'

const LanguagesButton = (): JSX.Element => {
  const filters: Filters = useUnit($filters)
  const [currentTag, setCurrentTag] = useState<number>(0)

  useEffect(() => {
    if (filters.selectedTag === undefined) {
      setCurrentTag(0)
    } else {
      setCurrentTag(filters.selectedTag)
    }
  }, [filters.selectedTag])

  return (
    <>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.KG}/${currentTag}`
        }}>
        <LanguageButton isKg={true}/>
      </Link>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.EN}/${currentTag}`
        }}>
        <LanguageButton isKg={false}/>
      </Link>
    </>
  )
}

export default LanguagesButton