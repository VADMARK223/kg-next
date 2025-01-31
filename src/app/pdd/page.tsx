/**
 * Компонент пока тестовый.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { Tag } from '@/app/lib/model/entity/Tag'
import { fetchTagsCommon, fetchWordsCommon } from '@/app/api/api'
import { Word } from '@/app/lib/model/word'
import Filter from '@/app/ui/home/filter/Filter'
import WordsTopButton from '@/app/ui/home/word/WordsTopButton'
import WordsTableNew from '@/app/ui/home/word/WordsTableNew'

export default async function PddPage () {
  const tags: Tag[] = await fetchTagsCommon()
  const words: Word[] = await fetchWordsCommon()

  return (
    <div className={'max-w-screen'}>
      <Filter tags={tags}/>
      <WordsTableNew initWords={words}/>
      <WordsTopButton/>
    </div>
  )
}