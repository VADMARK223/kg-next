/**
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { db, sql } from '@vercel/postgres'
import { Tag } from '@/app/lib/model/entity/Tag'
import { Word, WordEntity } from '@/app/lib/model/word'
import { TAGS, WORDS } from '@/app/lib/model/data'

export const IS_REMOTE_MODE = false

// Tags
export const fetchTagsCommon = async () => {
  return IS_REMOTE_MODE ? await fetchTags() : fetchTagsLocal()
}

export const fetchTagsByIdCommon = async (id: number) => {
  return IS_REMOTE_MODE ? await fetchTagsById(id) : fetchTagsByIdLocal(id)
}

async function fetchTagsById (id: number): Promise<Tag> {
  const data = await sql<Tag>`SELECT *
                              FROM tags
                              WHERE tags.id = ${id}`
  return data.rows[0]
}

export const fetchTagsByIdLocal = (id: number): Tag => {
  const tag = TAGS.find(tag => tag.id === id)
  if (tag === undefined) {
    throw new Error(`Не найден тег '${id}'!`)
  }

  return tag
}

async function fetchTags (): Promise<Tag[]> {
  const data = await sql<Tag>`SELECT *
                              FROM tags
                              ORDER BY id`
  return data.rows
}

const fetchTagsLocal = (): Tag[] => {
  return TAGS.sort((a, b) => a.name.localeCompare(b.name))
}

// Words
export const fetchWordsCommon = async () => {
  return IS_REMOTE_MODE ? await fetchWords() : fetchWordsLocal()
}

export async function fetchWords (tagId ?: number): Promise<Word[]> {
  const baseQuery = `
      SELECT words.id, words.ru, words.kg, t.name AS tagname, t.color AS color
      FROM words
               JOIN tags t ON t.id = words.tag
  `

  const conditionalQuery = tagId && tagId !== 0 ? `WHERE words.tag = $1` : ''
  const query = `${baseQuery} ${conditionalQuery}`

  const params = tagId && tagId !== 0 ? [tagId] : []

  const data = await db.query<Word>(query, params) // Предполагаем, что `db.query` — это метод вашей SQL-библиотеки
  return data.rows
}

export const fetchWordsLocal = (tagId?: number): Word[] => {
  const result: Word[] = []
  let id = 0
  WORDS.forEach((word: WordEntity) => {
    if (tagId && word.tag !== tagId) {
      return
    }

    const tag = TAGS.find(tag => tag.id === word.tag)
    if (tag === undefined) {
      throw new Error(`У слова '${word.ru}' не найден тег '${word.tag}'!`)
    }
    result.push({
      id: id++,
      ru: word.ru,
      kg: word.kg,
      en: word.en,
      tagname: tag.name,
      color: tag.color
    })
  })

  return result.sort((a, b) => a.ru.localeCompare(b.ru))
}

export const fetchWordsByTag = async (tagId: number|undefined): Promise<Word[]> => {
  const response = await fetch(`/api/word`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tagId: tagId })
  })
  return await response.json() as Word[]
}

export const fetchByTagByName = async (tagName: string): Promise<Tag> => {
  // TODO: доделать
  return await fetch(`/api/tags/${tagName}`, {}).then()
}

export const fetchByTagByNameLocal = (tagName: string) => {
  const tag = TAGS.find(tag => tag.name === tagName)
  if (tag === undefined) {
    throw new Error(`Тег '${tagName}' не найден!`)
  }
  return tag
}