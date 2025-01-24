/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 22.01.2025
 */
import { JSX } from 'react'
import { Word } from '@/app/lib/model/word'

interface TableRowProps {
  id: number
  value?: number | string
  word: Word
  isTag?: boolean
  callback?: (tagname: string) => void
}

const TableRow = ({ id, value, word, callback, isTag = false }: TableRowProps): JSX.Element => {
  return (
    <th>
      <span
        onClick={() => {
          if (callback !== undefined) {
            callback(word.tagname)
          }
        }}
        style={{
          color: isTag ? word.color : undefined,
          cursor: isTag ? 'pointer' : undefined,
          textDecoration: isTag ? 'underline' : undefined
        }}>{value}</span>
      {/*{!isDevMode()*/}
      {/*  ? <span style={{*/}
      {/*    color: isTag ? word.color : undefined,*/}
      {/*    textDecoration: isTag ? 'underline' : undefined*/}
      {/*  }}>{value}</span>*/}
      {/*  : <Link href={`/word/${id}`}>*/}
      {/*<span style={{*/}
      {/*  color: isTag ? word.color : undefined,*/}
      {/*  textDecoration: isTag ? 'underline' : undefined*/}
      {/*}}>{value}</span>*/}
      {/*  </Link>*/}
      {/*}*/}
    </th>
  )
}

export default TableRow