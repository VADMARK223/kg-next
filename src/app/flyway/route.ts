/**
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { db } from '@vercel/postgres'
import { tags } from '@/app/lib/placeholder-data'

const client = await db.connect()

async function createTags () {
  await client.sql`DROP TABLE IF EXISTS tags;`
  await client.sql`
      CREATE TABLE tags
      (
          id    SERIAL PRIMARY KEY,
          name  VARCHAR(50) NOT NULL,
          color VARCHAR(20)
      );`

  await Promise.all(
    tags.map(async (tag) => {
      await client.sql`INSERT INTO tags (id, name, color)
                       VALUES (${tag.id}, ${tag.name}, ${tag.color});`
    })
  )
}

export async function GET () {
  try {
    await client.sql`BEGIN`
    await createTags()
    await client.sql`COMMIT`

    return Response.json({ message: 'Готово' })
  } catch (error) {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }
}