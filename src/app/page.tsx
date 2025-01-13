import { fetchTagsCommon, fetchWordsCommon } from '@/app/api/api'
import Filter from '@/app/ui/home/filter/Filter'
import WordsTable from '@/app/ui/home/word/WordsTable'
import { Word } from '@/app/lib/model/word'
import { Tag } from '@/app/lib/model/entity/Tag'

export default async function Home () {
  const tags: Tag[] = await fetchTagsCommon()
  const words: Word[] = await fetchWordsCommon()

  return (
    <div>
      <div className={'flex items-center gap-3'}>
        <Filter tags={tags}/>
      </div>

      <div>
        <WordsTable initWords={words}/>
      </div>
    </div>
  )
}
