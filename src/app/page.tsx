import { fetchTagsCommon, fetchWordsCommon } from '@/app/api/api'
import Filter from '@/app/ui/home/filter/Filter'
import WordsTable from '@/app/ui/home/word/WordsTable'
import { Word } from '@/app/lib/model/word'
import { Tag } from '@/app/lib/model/entity/Tag'
import WordsTopButton from '@/app/ui/home/word/WordsTopButton'

export default async function Home () {
  const tags: Tag[] = await fetchTagsCommon()
  const words: Word[] = await fetchWordsCommon()

  return (
    <div className={'max-w-screen'}>
      <Filter tags={tags}/>
      <WordsTable initWords={words}/>
      <WordsTopButton/>
    </div>
  )
}
