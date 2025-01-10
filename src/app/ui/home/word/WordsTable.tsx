/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { JSX } from 'react'
import { Word } from '@/app/lib/model'

interface WordsTableProps {
  words: Word[]
}

const WordsTable = ({ words }: WordsTableProps): JSX.Element => {
  return (
    <div>
      <table className={'table table-zebra'}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Русский</th>
          <th>Кыргызский</th>
          <th>Категория</th>
        </tr>
        </thead>
        <tbody>
        {words.map((tag) => (
          <tr key={tag.id}>
            <th>{tag.id}</th>
            <th>{tag.ru}</th>
            <th>{tag.kg}</th>
            <th>{tag.tag}</th>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordsTable