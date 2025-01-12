import { fetchTags, fetchTagsLocal, fetchWords, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import Filter from '@/app/ui/home/filter/Filter'
import WordsTable from '@/app/ui/home/word/WordsTable'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word } from '@/app/lib/model/word'

export default async function Home () {
  const tags: Tag[] = IS_REMOTE_MODE ? await fetchTags() : fetchTagsLocal()
  const words: Word[] = IS_REMOTE_MODE ? await fetchWords() : fetchWordsLocal()

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
