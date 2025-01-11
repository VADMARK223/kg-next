import { fetchWords } from '@/app/api/api'

/**
 * @author Markitanov Vadim
 * @since 11.01.2025
 */
export async function POST (req: Request) {
  const { tagId }: { tagId: number } = await req.json()
  const response = await fetchWords(tagId)
  return Response.json(response)
}