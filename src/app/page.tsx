import { fetchTags, fetchWords } from '@/app/lib/api'
import { Tag, Word } from '@/app/lib/model'
import Filter from '@/app/ui/home/filter/Filter'
import ValueViewer from '@/app/ui/common/ValueViewer'
import WordsTable from '@/app/ui/home/word/WordsTable'

export default async function Home () {
  const tags: Tag[] = await fetchTags()
  const words: Word[] = await fetchWords()

  return (
    <div>
      <div className={'flex items-center gap-3'}>
        <Filter tags={tags}/>
        <ValueViewer name={'Слов'} value={words.length}/>
      </div>

      <div>
        <WordsTable words={words}/>
      </div>
    </div>
  )
}
