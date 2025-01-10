/**
 * Данные заполнители.
 *
 * @author Markitanov Vadim
 * @since 08.01.2025
 */
import { Tag, Word } from '@/app/lib/model'

const tags: Tag[] = [
  {
    id: 1,
    name: 'Числительные'
  },
  {
    id: 2,
    name: 'Цвета'
  },
  {
    id: 3,
    name: 'Фрукты'
  },
  {
    id: 4,
    name: 'Овощи',
    color: 'green'
  }
]

const words: Word[] = [
  { id: 1, ru: 'Ноль', kg: 'Нөл', tag: 1 },
  { id: 2, ru: 'Один', kg: 'Бир', tag: 1 },
  { id: 3, ru: 'Два', kg: 'Эки', tag: 1 },
  { id: 4, ru: 'Три', kg: 'Үч', tag: 1 },
  { id: 5, ru: 'Четыре', kg: 'Төрт', tag: 1 },
  { id: 6, ru: 'Пять', kg: 'Беш', tag: 1 },
  { id: 7, ru: 'Шесть', kg: 'Алты', tag: 1 },
  { id: 8, ru: 'Семь', kg: 'Жети', tag: 1 },
  { id: 9, ru: 'Восемь', kg: 'Сегиз', tag: 1 },
  { id: 10, ru: 'Девять', kg: 'Тогуз', tag: 1 },
  { id: 11, ru: 'Десять', kg: 'Он', tag: 1 },
  { id: 12, ru: 'Двадцать', kg: 'Жыйырма', tag: 1 },
  { id: 13, ru: 'Тридцать', kg: 'Отуз', tag: 1 },
  { id: 14, ru: 'Сорок', kg: 'Кырк', tag: 1 },
  { id: 15, ru: 'Пятьдесят', kg: 'Элүү', tag: 1 },
  { id: 16, ru: 'Шестьдесят', kg: 'Алтымыш', tag: 1 },
  { id: 17, ru: 'Семьдесят', kg: 'Жетимиш', tag: 1 },
  { id: 18, ru: 'Восемьдесят', kg: 'Сексен', tag: 1 },
  { id: 19, ru: 'Девяносто', kg: 'Токсон', tag: 1 },
  { id: 20, ru: 'Тысяча', kg: 'Миң', tag: 1 }
]

export { tags, words }