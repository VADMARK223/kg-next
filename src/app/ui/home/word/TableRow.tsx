/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 22.01.2025
 */
import { JSX } from 'react'
import { Word } from '@/app/lib/model/word'
import { Tag } from '@/app/lib/model/entity/Tag'
import { fetchByTagByName, fetchByTagByNameLocal, IS_REMOTE_MODE } from '@/app/api/api'
import { selectedTagModeUpdated, selectedTagUpdated } from '@/app/lib/effector/filter'

interface TableRowProps {
  value?: number | string
  word: Word
  isTag?: boolean
}

const TableRow = ({ value, word, isTag = false }: TableRowProps): JSX.Element => {
  const clickHandler = async (tagName: string) => {
    const tag: Tag = IS_REMOTE_MODE ? await fetchByTagByName(tagName) : fetchByTagByNameLocal(tagName)
    selectedTagUpdated(tag.id)
    selectedTagModeUpdated(true)
  }

  return (
    <th
      // className={'w-[500px] w-min-[400px]'}
    >
      <span
        onClick={() => {
          if (isTag) {
            clickHandler(word.tagname)
          }
        }}
        style={{
          color: isTag ? word.color : undefined,
          cursor: isTag ? 'pointer' : undefined,
          textDecoration: isTag ? 'underline' : undefined
        }}>{value}</span>
    </th>
  )
}

export default TableRow