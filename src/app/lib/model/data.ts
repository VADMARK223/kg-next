/**
 * Данные заполнители.
 *
 * @author Markitanov Vadim
 * @since 08.01.2025
 */
import { Tag } from '@/app/lib/model/entity/Tag'
import { WordEntity } from '@/app/lib/model/word'

const TAGS: Tag[] = [
  { id: 1, name: 'Числительные', color: '#808080' },
  { id: 2, name: 'Цвета', color: '#F59E0B' },
  { id: 3, name: 'Фрукты', color: '#4CAF50' },
  { id: 4, name: 'Овощи', color: '#EF4444' },
  { id: 5, name: 'Дом', color: '#D8B384' },
  { id: 6, name: 'Животные', color: '#FB923C' },
  { id: 7, name: 'Строения', color: '#6B7280' },
  { id: 8, name: 'Природа', color: '#1E3A8A' },
  { id: 9, name: 'Еда и напитки', color: '#9A3412' },
  { id: 10, name: 'Человеческое тело', color: '#F5D7B6' }
]

const createWord = (ru: string, kg: string, tag: number): WordEntity => {
  return { id: 0, ru: ru, kg: kg, tag: tag }
}

const WORDS: WordEntity[] = [
  // Числительные
  { id: 0, ru: 'Ноль', kg: 'Нөл', tag: 1 },
  { id: 0, ru: 'Один', kg: 'Бир', tag: 1 },
  { id: 0, ru: 'Два', kg: 'Эки', tag: 1 },
  { id: 0, ru: 'Три', kg: 'Үч', tag: 1 },
  { id: 0, ru: 'Четыре', kg: 'Төрт', tag: 1 },
  { id: 0, ru: 'Пять', kg: 'Беш', tag: 1 },
  { id: 0, ru: 'Шесть', kg: 'Алты', tag: 1 },
  { id: 0, ru: 'Семь', kg: 'Жети', tag: 1 },
  { id: 0, ru: 'Восемь', kg: 'Сегиз', tag: 1 },
  { id: 0, ru: 'Девять', kg: 'Тогуз', tag: 1 },
  { id: 0, ru: 'Десять', kg: 'Он', tag: 1 },
  { id: 0, ru: 'Двадцать', kg: 'Жыйырма', tag: 1 },
  { id: 0, ru: 'Тридцать', kg: 'Отуз', tag: 1 },
  { id: 0, ru: 'Сорок', kg: 'Кырк', tag: 1 },
  { id: 0, ru: 'Пятьдесят', kg: 'Элүү', tag: 1 },
  { id: 0, ru: 'Шестьдесят', kg: 'Алтымыш', tag: 1 },
  { id: 0, ru: 'Семьдесят', kg: 'Жетимиш', tag: 1 },
  { id: 0, ru: 'Восемьдесят', kg: 'Сексен', tag: 1 },
  { id: 0, ru: 'Девяносто', kg: 'Токсон', tag: 1 },
  { id: 0, ru: 'Тысяча', kg: 'Миң', tag: 1 },
  // Цвета
  { id: 0, ru: 'Белый', kg: 'Ак', tag: 2 },
  { id: 0, ru: 'Черный', kg: 'Кара', tag: 2 },
  { id: 0, ru: 'Красный', kg: 'Кызыл', tag: 2 },
  { id: 0, ru: 'Зеленый', kg: 'Жашыл', tag: 2 },
  { id: 0, ru: 'Синий', kg: 'Көк', tag: 2 },
  { id: 0, ru: 'Желтый', kg: 'Сары', tag: 2 },
  { id: 0, ru: 'Оранжевый', kg: 'Кызгыл сары|Ачык күрөң', tag: 2 },
  { id: 0, ru: 'Фиолетовый', kg: 'Кызгылт көк', tag: 2 },
  { id: 0, ru: 'Розовый', kg: 'Кызыл, кызгылт', tag: 2 },
  { id: 0, ru: 'Коричневый', kg: 'Күрөң', tag: 2 },
  { id: 0, ru: 'Серый', kg: 'Боз, сур, көк', tag: 2 },
  { id: 0, ru: 'Голубой', kg: 'Көк', tag: 2 },
  { id: 0, ru: 'Бирюзовый', kg: 'Бирюза түстүү', tag: 2 },
  { id: 0, ru: 'Лиловый', kg: 'Кызгылт көгүш', tag: 2 },
  { id: 0, ru: 'Песочный', kg: 'Кум түстүү', tag: 2 },
  { id: 0, ru: 'Коралловый', kg: 'Шуру (маржан) түстүү', tag: 2 },
  { id: 0, ru: 'Золотой', kg: 'Алтын', tag: 2 },
  { id: 0, ru: 'Серебряный', kg: 'Күмүш', tag: 2 },
  { id: 0, ru: 'Бронзовый', kg: 'Коло түстүү', tag: 2 },
  // Фрукты
  { id: 0, ru: 'Яблоко', kg: 'Алма', tag: 3 },
  { id: 0, ru: 'Груша', kg: 'Алмурут', tag: 3 },
  { id: 0, ru: 'Виноград', kg: 'Жүзүм', tag: 3 },
  { id: 0, ru: 'Арбуз', kg: 'Дарбыз', tag: 3 },
  { id: 0, ru: 'Дыня', kg: 'Коон', tag: 3 },
  { id: 0, ru: 'Гранат', kg: 'Анар', tag: 3 },
  { id: 0, ru: 'Абрикос', kg: 'Өрүк', tag: 3 },
  { id: 0, ru: 'Персик', kg: 'Шабдалы', tag: 3 },
  // Овощи
  { id: 0, ru: 'Картофель', kg: 'Картөшкө', tag: 4 },
  { id: 0, ru: 'Морковь', kg: 'Сабиз', tag: 4 },
  { id: 0, ru: 'Лук', kg: 'Пияз', tag: 4 },
  { id: 0, ru: 'Чеснок', kg: 'Сарымсак', tag: 4 },
  { id: 0, ru: 'Горох', kg: 'Буурчак', tag: 4 },
  { id: 0, ru: 'Огурец', kg: 'Бадыраң', tag: 4 },
  // Дом
  createWord('Дом', 'үй', 5),
  createWord('Дверь', 'Эшик', 5),
  createWord('Окно', 'Терезе', 5),
  createWord('Ложка', 'Кашык', 5),
  createWord('Нож', 'Бычак', 5),
  // Животные
  createWord('Кошка', 'Мышык', 6),
  createWord('Собака', 'Ит', 6),
  createWord('Корова', 'Уй', 6),
  createWord('Осёл', 'Эшек', 6),
  createWord('Свинья', 'Чочко', 6),
  createWord('Поросёнок', 'Торпой', 6),
  createWord('Слон', 'Пил', 6),
  // Строения
  createWord('Магазин', 'Дүкөн', 7),
  createWord('Аптека', 'Дарыкана', 7),
  createWord('Школа', 'Мектеп', 7),
  createWord('Больница', 'Оорукана', 7),
  createWord('Гостиница', 'Мейманкана', 7),
  createWord('Типография', 'Басманкана', 7),
  // Природа
  createWord('Море', 'Деңиз', 8),
  createWord('Гора', 'Тоо', 8),
  createWord('Лес', 'Токой', 8),
  createWord('Озеро', 'Көл', 8),
  // Еда и напитки
  createWord('Мясо', 'Эт', 9),
  createWord('Хлеб', 'Нан', 9),
  createWord('Соль', 'Туз', 9),
  // Человеческое тело
  createWord('Палец', 'Бармак', 10),
  createWord('Рука', 'Кол', 10)
]

export { TAGS, WORDS }