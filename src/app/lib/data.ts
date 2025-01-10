/**
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { sql } from '@vercel/postgres'
import { Customer, Revenue, Tag } from '@/app/lib/definitions'

export async function fetchTags (): Promise<Tag[]> {
  const data = await sql<Tag>`SELECT *
                              FROM tags`
  return data.rows
}

export async function fetchRevenues () {
  try {
    console.log('Start fetching...:')
    await new Promise(resolve => setTimeout(resolve, 3000))
    const data = await sql<Revenue>`SELECT *
                                    FROM revenue`

    console.log('End fetching. 3 sec')
    return data.rows
  } catch (error) {
    console.error(`Database error: ${error}`)
    throw new Error('Failed to fetch revenues.')
  }
}

export async function fetchCustomers () {
  try {
    const data = await sql<Customer>`SELECT *
                                     FROM customers`
    return data.rows
  } catch (error) {
    console.error(`Database error: ${error}`)
    throw new Error('Failed to fetch revenues.')
  }
}