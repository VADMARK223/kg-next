/**
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { sql } from '@vercel/postgres'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word } from '@/app/lib/model/word'

export async function fetchTags (): Promise<Tag[]> {
  const data = await sql<Tag>`SELECT *
                              FROM tags`
  return data.rows
}

export async function fetchWords (tagId ?: number): Promise<Word[]> {
  const query = tagId === undefined || tagId === 0 ?
    sql<Word>`SELECT words.id, words.ru, words.kg, t.name AS tagname
              FROM words
                       JOIN tags t on t.id = words.tag;` :
    sql<Word>`SELECT words.id, words.ru, words.kg, t.name AS tagname
              FROM words
                       JOIN tags t on t.id = words.tag
              WHERE words.tag = ${tagId};`

  const data = await query
  return data.rows
}