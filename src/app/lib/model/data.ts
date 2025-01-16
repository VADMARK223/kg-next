/**
 * Данные заполнители.
 *
 * @author Markitanov Vadim
 * @since 08.01.2025
 */
import { Tag } from '@/app/lib/model/entity/Tag'
import { WordEntity } from '@/app/lib/model/word'

const TAGS: Tag[] = [
  { id: 1, name: 'Разное'},
  { id: 2, name: 'Числительные', color: '#808080' },
  { id: 3, name: 'Цвета', color: '#F59E0B' },
  { id: 4, name: 'Фрукты', color: '#4CAF50' },
  { id: 5, name: 'Овощи', color: '#EF4444' },
  { id: 6, name: 'Дом', color: '#D8B384' },
  { id: 7, name: 'Животные', color: '#FB923C' },
  { id: 8, name: 'Строения', color: '#6B7280' },
  { id: 9, name: 'Природа', color: '#1E3A8A' },
  { id: 10, name: 'Еда и напитки', color: '#9A3412' },
  { id: 11, name: 'Человеческое тело', color: '#F5D7B6' },
  { id: 12, name: 'Материал', color: '#2C3E50' },
  { id: 13, name: 'Птицы', color: '#87CEEB' },
]

const createWord = (ru: string, kg: string, tag: number): WordEntity => {
  return { id: 0, ru: ru, kg: kg, tag: tag }
}

const WORDS: WordEntity[] = [
  // Разное
  createWord('Большой', 'Чоң', 1),
  createWord('Маленький', 'Кичине', 1),
  createWord('Работа', 'Иш, жумуш', 1),
  createWord('Внутренний', 'Ички', 1),
  createWord('Входить', 'Кирүү', 1),
  createWord('Выходить', 'Чыгуу', 1),
  createWord('Играть', 'Ойноо', 1),
  createWord('Игра', 'Оюн', 1),
  createWord('Начальник, Сумка', 'Баштык', 1),
  createWord('Яд', 'Уу', 1),
  createWord('Дорога', 'Жол', 1),
  // Числительные
  createWord('Ноль', 'Нөл', 2),
  createWord('Один', 'Бир', 2),
  { id: 0, ru: 'Два', kg: 'Эки', tag: 2 },
  { id: 0, ru: 'Три', kg: 'Үч', tag: 2 },
  { id: 0, ru: 'Четыре', kg: 'Төрт', tag: 2 },
  { id: 0, ru: 'Пять', kg: 'Беш', tag: 2 },
  { id: 0, ru: 'Шесть', kg: 'Алты', tag: 2 },
  { id: 0, ru: 'Семь', kg: 'Жети', tag: 2 },
  { id: 0, ru: 'Восемь', kg: 'Сегиз', tag: 2 },
  { id: 0, ru: 'Девять', kg: 'Тогуз', tag: 2 },
  { id: 0, ru: 'Десять', kg: 'Он', tag: 2 },
  { id: 0, ru: 'Двадцать', kg: 'Жыйырма', tag: 2 },
  { id: 0, ru: 'Тридцать', kg: 'Отуз', tag: 2 },
  { id: 0, ru: 'Сорок', kg: 'Кырк', tag: 2 },
  { id: 0, ru: 'Пятьдесят', kg: 'Элүү', tag: 2 },
  { id: 0, ru: 'Шестьдесят', kg: 'Алтымыш', tag: 2 },
  { id: 0, ru: 'Семьдесят', kg: 'Жетимиш', tag: 2 },
  { id: 0, ru: 'Восемьдесят', kg: 'Сексен', tag: 2 },
  { id: 0, ru: 'Девяносто', kg: 'Токсон', tag: 2 },
  { id: 0, ru: 'Тысяча', kg: 'Миң', tag: 2 },
  // Цвета
  { id: 0, ru: 'Белый', kg: 'Ак', tag: 3 },
  { id: 0, ru: 'Черный', kg: 'Кара', tag: 3 },
  { id: 0, ru: 'Красный', kg: 'Кызыл', tag: 3 },
  { id: 0, ru: 'Зеленый', kg: 'Жашыл', tag: 3 },
  { id: 0, ru: 'Синий', kg: 'Көк', tag: 3 },
  { id: 0, ru: 'Желтый', kg: 'Сары', tag: 3 },
  { id: 0, ru: 'Оранжевый', kg: 'Кызгыл сары|Ачык күрөң', tag: 3 },
  { id: 0, ru: 'Фиолетовый', kg: 'Кызгылт көк', tag: 3 },
  { id: 0, ru: 'Розовый', kg: 'Кызыл, кызгылт', tag: 3 },
  { id: 0, ru: 'Коричневый', kg: 'Күрөң', tag: 3 },
  { id: 0, ru: 'Серый', kg: 'Боз, сур, көк', tag: 3 },
  { id: 0, ru: 'Голубой', kg: 'Көк', tag: 3 },
  { id: 0, ru: 'Бирюзовый', kg: 'Бирюза түстүү', tag: 3 },
  { id: 0, ru: 'Лиловый', kg: 'Кызгылт көгүш', tag: 3 },
  { id: 0, ru: 'Песочный', kg: 'Кум түстүү', tag: 3 },
  { id: 0, ru: 'Коралловый', kg: 'Шуру (маржан) түстүү', tag: 3 },
  { id: 0, ru: 'Золотой', kg: 'Алтын', tag: 3 },
  { id: 0, ru: 'Серебряный', kg: 'Күмүш', tag: 3 },
  { id: 0, ru: 'Бронзовый', kg: 'Коло түстүү', tag: 3 },
  // Фрукты
  { id: 0, ru: 'Яблоко', kg: 'Алма', tag: 4 },
  { id: 0, ru: 'Груша', kg: 'Алмурут', tag: 4 },
  { id: 0, ru: 'Виноград', kg: 'Жүзүм', tag: 4 },
  { id: 0, ru: 'Арбуз', kg: 'Дарбыз', tag: 4 },
  { id: 0, ru: 'Дыня', kg: 'Коон', tag: 4 },
  { id: 0, ru: 'Гранат', kg: 'Анар', tag: 4 },
  { id: 0, ru: 'Абрикос', kg: 'Өрүк', tag: 4 },
  { id: 0, ru: 'Персик', kg: 'Шабдалы', tag: 4 },
  // Овощи
  createWord('Картофель', 'Картөшкө', 5),
  createWord('Морковь', 'Сабиз', 5),
  createWord('Лук', 'Пияз', 5),
  createWord('Чеснок', 'Сарымсак', 5),
  createWord('Горох', 'Буурчак', 5),
  createWord('Огурец', 'Бадыраң', 5),
  // Дом
  createWord('Дом', 'Үй', 6),
  createWord('Этаж', 'Кабат', 6),
  createWord('Дверь', 'Эшик', 6),
  createWord('Окно', 'Терезе', 6),
  createWord('Ложка', 'Кашык', 6),
  createWord('Нож', 'Бычак', 6),
  // Животные
  createWord('Кошка', 'Мышык', 7),
  createWord('Собака', 'Ит', 7),
  createWord('Корова', 'Уй', 7),
  createWord('Медведь', 'Аюу', 7),
  createWord('Осёл', 'Эшек', 7),
  createWord('Олень', 'Бугу', 7),
  createWord('Свинья', 'Чочко', 7),
  createWord('Поросёнок', 'Торпой', 7),
  createWord('Слон', 'Пил', 7),
  createWord('Лев', 'Арстан', 7),
  createWord('Тигр', 'Жолборс', 7),
  createWord('Верблюд', 'Төө', 7),
  // Строения
  createWord('Магазин', 'Дүкөн', 8),
  createWord('Аптека', 'Дарыкана', 8),
  createWord('Школа', 'Мектеп', 8),
  createWord('Больница', 'Оорукана', 8),
  createWord('Гостиница', 'Мейманкана', 8),
  createWord('Типография', 'Басманкана', 8),
  // Природа
  createWord('Море', 'Деңиз', 9),
  createWord('Гора', 'Тоо', 9),
  createWord('Лес', 'Токой', 9),
  createWord('Озеро', 'Көл', 9),
  createWord('Дерево', 'Жыгач', 9),
  // Еда и напитки
  createWord('Еда', 'Тамак', 10),
  createWord('Вода', 'Суу', 10),
  createWord('Молоко', 'Сүт', 10),
  createWord('Мясо', 'Эт', 10),
  createWord('Хлеб', 'Нан', 10),
  createWord('Соль', 'Туз', 10),
  createWord('Кукуруза', 'Жүгөрү', 10),
  createWord('Гриб', 'Козу карын', 10),
  // Человеческое тело
  createWord('Голова', 'Баш', 11),
  createWord('Глаз', 'Көз', 11),
  createWord('Палец', 'Бармак', 11),
  createWord('Рука', 'Кол', 11),
  createWord('Волос', 'Чач', 11),
  // Материал
  createWord('Золото', 'Алтын', 12),
  createWord('Серебро', 'Күмүш', 12),
  createWord('Уголь', 'Көмүр', 12),
  createWord('Железо', 'Темир', 12),
  createWord('Песок', 'Кум', 12),
  createWord('Древесина', 'Жыгач', 12),
  // Птицы
  createWord('Курица', 'Тоок', 13),
  createWord('Голубь', 'Көгүчкөн', 13),
  createWord('Ворона', 'Карга', 13),
  createWord('Орёл', 'Бүркүт', 13),
]

export { TAGS, WORDS }