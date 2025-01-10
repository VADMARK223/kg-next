/**
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { sql } from '@vercel/postgres'
import { Tag, Word } from '@/app/lib/model'

export async function fetchTags (): Promise<Tag[]> {
  const data = await sql<Tag>`SELECT *
                              FROM tags`
  return data.rows
}

export async function fetchWords (): Promise<Word[]> {
  const data = await sql<Word>`SELECT *
                              FROM words`
  return data.rows
}