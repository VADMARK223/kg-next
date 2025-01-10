import { fetchTags, fetchWords } from '@/app/lib/api'
import Filter from '@/app/ui/home/filter/Filter'
import WordsTable from '@/app/ui/home/word/WordsTable'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word } from '@/app/lib/model/word'

export default async function Home () {
  const tags: Tag[] = await fetchTags()
  const words: Word[] = await fetchWords()

  return (
    <div>
      <div className={'flex items-center gap-3'}>
        <Filter tags={tags} words={words} />
      </div>

      <div>
        <WordsTable words={words}/>
      </div>
    </div>
  )
}
