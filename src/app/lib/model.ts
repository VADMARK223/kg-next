/**
 * Модели данных.
 *
 * @author Markitanov Vadim
 * @since 08.01.2025
 */
export type Tag = {
  id: number;
  name: string;
  color?: string;
}

export type Word = {
  id: number;
  ru: string;
  kg: string;
  tag: number;
}