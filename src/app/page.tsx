import TagSelect from '@/app/ui/home/TagSelect'
import { fetchTags } from '@/app/lib/data'
import { Tag } from '@/app/lib/definitions'

export default async function Home () {
  const tags: Tag[] = await fetchTags()
  return (
    <div>
      <TagSelect data={tags}/>
    </div>
  )
}
