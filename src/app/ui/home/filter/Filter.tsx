/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import TagSelect from '@/app/ui/home/filter/TagSelect'
import ValueViewer from '@/app/ui/common/ValueViewer'
import { Tag } from '@/app/lib/model/entity/Tag'
import { $searchString, $words, searchStringUpdated, wordsUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'
import Link from 'next/link'
import { fetchWordsByTag, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'
import Image from 'next/image'

interface FilterProps {
  tags: Tag[]
}

const Filter = ({ tags }: FilterProps): JSX.Element => {
  const words = useUnit($words)
  const [selectedTag, setSelectedTag] = useState<number>(0)
  const searchString = useUnit($searchString)

  const handlerApply = async (tagId: number/*selectedData: SelectedData*/) => {
    const newWords = IS_REMOTE_MODE ? await fetchWordsByTag(tagId) : fetchWordsLocal(tagId)
    wordsUpdated(newWords)
  }

  useEffect(() => {
    handlerApply(selectedTag)
  }, [selectedTag])

  const handleAddCharacter = (char: string) => {
    searchStringUpdated(searchString + char)
  }

  return (
    <div className={'flex flex-wrap items-center gap-3'}>
      <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin={'round'} strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search"
               className="grow"
               placeholder="Поиск"
               value={searchString}
               onChange={e => {
                 searchStringUpdated(e.target.value)
               }}/>
        <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
             onClick={() => handleAddCharacter('ө')}>
          Ө
        </kbd>
        <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
             onClick={() => handleAddCharacter('ү')}>
          Ү
        </kbd>
        <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
             onClick={() => handleAddCharacter('ң')}>
          Ң
        </kbd>
      </label>
      <TagSelect data={tags} callback={(value: number) => {
        setSelectedTag(value)
      }}/>
      <Link
        href={{
          pathname: `/quiz/${selectedTag}`,
          query: { country: 'kg' }
        }}>
        <button className={'btn btn-primary'}>
          Учить <Image src="/kg.png" alt="Kyrgyzstan" width={20} height={14} priority/>
        </button>
      </Link>
      {/*<Link
        href={{ pathname: `/quiz/${selectedTag}`, query: { country: 'gb' } }}>
        <button className={'btn btn-primary'}>
          Учить Учить <Image src="/gb.png" alt="Great Britain" width={20} height={14} priority/>
        </button>
      </Link>*/}
      <ValueViewer name={'Слов'} value={words.length}/>
    </div>
  )
}

export default Filter