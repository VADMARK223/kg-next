/**
 * @author Markitanov Vadim
 * @since 11.01.2025
 */
/**
 * Страница пересоздания таблиц и их заполнение.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { db } from '@vercel/postgres'
import { TAGS, WORDS } from '@/app/lib/model/data'
import { WordEntity } from '@/app/lib/model/word'
import { MAX_WORD_LENGTH } from '@/app/lib/utils'

const client = await db.connect()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function initTags () {
  await client.sql`DROP TABLE IF EXISTS tags CASCADE;`
  await client.sql`
      CREATE TABLE tags
      (
          id    SERIAL PRIMARY KEY,
          name  VARCHAR(50) NOT NULL,
          color VARCHAR(20)
      );`

  await Promise.all(
    TAGS.map(async (tag) => {
      await client.sql`INSERT INTO tags (id, name, color)
                       VALUES (${tag.id}, ${tag.name}, ${tag.color});`
    })
  )
}

async function initWords () {
  await client.sql`DROP TABLE IF EXISTS words CASCADE;`
  await client.sql`
      CREATE TABLE words
      (
          id  SERIAL PRIMARY KEY,
          ru  VARCHAR(${MAX_WORD_LENGTH}) NOT NULL,
          kg  VARCHAR(${MAX_WORD_LENGTH}) NOT NULL,
          en  VARCHAR(${MAX_WORD_LENGTH}) NOT NULL,
          tag INTEGER     NOT NULL REFERENCES tags (id)
      );`

  await Promise.all(
    WORDS.map(async (word:WordEntity) => {
      await client.sql`INSERT INTO words (ru, kg, tag)
                       VALUES (${word.ru}, ${word.kg}, ${word.tag});`
    })
  )
}

export async function GET () {
  try {
    await client.sql`BEGIN`
    await initTags()
    await initWords()
    await client.sql`COMMIT`

    return Response.json({ message: 'Готово' })
  } catch (error) {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }
}