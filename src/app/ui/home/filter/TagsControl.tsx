/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.01.2025
 */
import { JSX, useEffect, useState } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import Link from 'next/link'
import { isDevMode, LANGUAGE_MODE } from '@/app/lib/utils'
import LanguageButton from '@/app/ui/common/LanguageButton'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Tag } from '@/app/lib/model/entity/Tag'
import { fetchWordsByTag, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import { $words, wordsUpdated } from '@/app/lib/effector/word'
import { Word } from '@/app/lib/model/word'
import { useUnit } from 'effector-react'

interface TagsControlProps {
  tags: Tag[]
}

const TagsControl = ({ tags }: TagsControlProps): JSX.Element => {
  const words: Word[] = useUnit($words)
  const [selectedTag, setSelectedTag] = useState<number>(0)

  const handlerApply = async (tagId: number) => {
    const newWords = IS_REMOTE_MODE ? await fetchWordsByTag(tagId) : fetchWordsLocal(tagId)
    wordsUpdated(newWords)
  }

  useEffect(() => {
    handlerApply(selectedTag)
  }, [selectedTag])

  return (
    <div className={'flex flex-wrap items-center gap-3 max-h-[300px]'}>
      <TagSelect data={tags} callback={(value: number) => {
        setSelectedTag(value)
      }}/>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.KG}/${selectedTag}`
        }}>
        <LanguageButton isKg={true}/>
      </Link>
      <Link
        href={{
          pathname: `/quiz/${LANGUAGE_MODE.EN}/${selectedTag}`
        }}>
        <LanguageButton isKg={false}/>
      </Link>
      {(isDevMode() ?? false) && <ValueViewer name={'Слов'} value={words.length}/>}
    </div>
  )
}

export default TagsControl