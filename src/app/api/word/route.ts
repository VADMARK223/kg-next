import { fetchWords, fetchWordsLocal, IS_REMOTE_MODE } from '@/app/api/api'

/**
 * @author Markitanov Vadim
 * @since 11.01.2025
 */
export async function POST (req: Request) {
  const { tagId }: { tagId: number } = await req.json()
  const response = IS_REMOTE_MODE ? await fetchWords(tagId): fetchWordsLocal(tagId)
  return Response.json(response)
}