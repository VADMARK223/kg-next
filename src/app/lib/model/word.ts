/**
 * @author Markitanov Vadim
 * @since 10.01.2025
 */

interface WordEntity {
  id: number
  ru: string
  kg: string
  tag: number
}

interface Word extends Omit<WordEntity, 'tag'> {
  tagname: string
  color: string
}

export type { WordEntity, Word }