/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.01.2025
 */
import { JSX } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import { Tag } from '@/app/lib/model/entity/Tag'
import LanguagesButton from '@/app/ui/home/filter/languagesButton/LanguagesButton'

interface TagsControlProps {
  tags: Tag[]
}

const TagsControl = ({ tags }: TagsControlProps): JSX.Element => {
  return (
    <div className={'flex items-center gap-3'}>
      <TagSelect data={tags}/>
      <LanguagesButton/>
    </div>
  )
}

export default TagsControl