/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.01.2025
 */
import { JSX } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import Link from 'next/link'
import { LANGUAGE_MODE } from '@/app/lib/utils'
import LanguageButton from '@/app/ui/common/LanguageButton'
import { Tag } from '@/app/lib/model/entity/Tag'
import { useUnit } from 'effector-react'
import { $filters, Filters, selectedTagUpdated } from '@/app/lib/effector/filter'
import WordsCountViewer from '@/app/ui/home/filter/WordsCountViewer'

interface TagsControlProps {
  tags: Tag[]
}

const TagsControl = ({ tags }: TagsControlProps): JSX.Element => {
  const filters: Filters = useUnit($filters)

  return (
    <div className={'flex items-center gap-3'}>
      <TagSelect data={tags} callback={(value: number) => {
        selectedTagUpdated(value)
      }}/>
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
    </div>
  )
}

export default TagsControl