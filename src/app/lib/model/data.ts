/**
 * Данные заполнители.
 *
 * @author Markitanov Vadim
 * @since 08.01.2025
 */
import { Tag } from '@/app/lib/model/entity/Tag'
import { WordEntity } from '@/app/lib/model/word'

/**
 * TODO:
 * Муха
 * Оранжевый
 * При выборе неправильного и правильного сразу загорался красный.
 */

const TAGS: Tag[] = [
  { id: 1, name: 'Разное' },
  { id: 2, name: 'Числительные', color: '#808080' },
  { id: 3, name: 'Цвета', color: '#F59E0B' },
  { id: 4, name: 'Фрукты', color: '#4CAF50' },
  { id: 5, name: 'Овощи', color: '#EF4444' },
  { id: 6, name: 'Дом', color: '#D8B384' },
  { id: 7, name: 'Животные', color: '#FB923C' },
  { id: 8, name: 'Дикие животные', color: '#D2B48C' },
  { id: 9, name: 'Строения', color: '#6B7280' },
  { id: 10, name: 'Природа', color: '#1E3A8A' },
  { id: 11, name: 'Еда и напитки', color: '#9A3412' },
  { id: 12, name: 'Человеческое тело', color: '#F5D7B6' },
  { id: 13, name: 'Материалы и вещества', color: '#2C3E50' },
  { id: 14, name: 'Птицы', color: '#87CEEB' },
  { id: 15, name: 'Город и село', color: '#8B4513' },
  { id: 16, name: 'Профессии', color: '#FFD700' },
  { id: 17, name: 'Одежда', color: '#FFC0CB' },
  { id: 18, name: 'Прилагательные', color: '#8A2BE2' },
  { id: 19, name: 'Глаголы', color: '#FF5733' },
  { id: 20, name: 'Цветы', color: '#FFB6C1' },
  { id: 21, name: 'Насекомые', color: '#FFD700' },
  { id: 22, name: 'Время', color: '#4682B4' },
  { id: 23, name: 'Страны', color: '#006400' },
  { id: 24, name: 'Инструменты', color: '#2F4F4F' },
  { id: 25, name: 'Рыбы', color: '#40E0D0' },
  { id: 26, name: 'География', color: '#00640F' }
]

const createWord = (ru: string, kg: string, tag: number, en: string): WordEntity => {
  return { id: 0, ru: ru, kg: kg, tag: tag, en: en }
}

// Разное
const common = (tag: number): WordEntity[] => {
  return [
    createWord('Работа', 'Иш, жумуш', tag, 'Job'),
    createWord('Игра', 'Оюн', tag, 'Game'),
    createWord('Начальник, сумка', 'Баштык', tag, 'Boss, bag'),
    createWord('Слово', 'Сөз', tag, 'Word'),
    createWord('Буква', 'Тамга', tag, 'Letter'),
    createWord('Словарь', 'Сөздүк', tag, 'Dictionary'),
    createWord('Книга', 'Китеп', tag, 'Book'),
    createWord('Ребёнок', 'Бала', tag, 'Child'),
    createWord('Песня', 'Ыр', tag, 'Song'),
    createWord('Равно', 'Барабар', tag, 'Equals'),
    createWord('Больше', 'Чоң', tag, 'More'),
    createWord('Плюс', 'Кошуу белгиси', tag, 'Plus'),
    createWord('Умножение', 'Көбөйтүү', tag, 'Multiplication'),
    createWord('Деление', 'Бөлүү', tag, 'Division'),
    createWord('Знак, метка', 'Белги', tag, 'Sing, mark'),
    createWord('Деньги', 'Акча', tag, 'Money'),
    createWord('Лопата', 'Күрөк', tag, 'Shovel'),
    createWord('Хорошо', 'Жакшы', tag, 'Fine'),
    createWord('Плохо', 'Жаман', tag, 'Badly'),
    createWord('Кино', 'Кино', tag, 'Movie'),
    createWord('Полёт', 'Учуу', tag, 'Flight'),
    createWord('Да', 'Ооба', tag, 'Yes'),
    createWord('Нет', 'Жок', tag, 'No'),
    createWord('Или', 'Же', tag, 'Or'),
    createWord('И', 'Жана', tag, 'And'),
    createWord('Не', 'Эмне, эмес', tag, 'Not'),
    createWord('Поиск', 'Издөө', tag, 'Search'),
    createWord('Промежуток', 'Ара', tag, 'Interval'),
    createWord('Копейка', 'Тыйын', tag, 'Kopeyka'),
    createWord('Колокол', 'Коңгуроо', tag, 'Bell'),
    createWord('Спасибо', 'Рахмат, ыракмат', tag, 'Thank you'),
    createWord('Он', 'Ал', tag, 'He'),
    createWord('Она', 'Ал', tag, 'She'),
    createWord('Оно', 'Ал', tag, 'It'),
    createWord('Польза', 'Пайда', tag, 'Benefit'),
    createWord('Любовь', 'Сүйүү', tag, 'Love'),
    createWord('Лекарство', 'Дары', tag, 'Medicine'),
    createWord('Пена', 'Көбүк', tag, 'Foam'),
    createWord('Сон', 'Уйку', tag, 'Dream'),
    createWord('Мусор', 'Таштанды, Шыпырынды', tag, 'Garbage'),
    createWord('Тетрадь', 'Дептер', tag, 'Notebook'),
    createWord('Друг', 'Дос', tag, 'Friend'),
    createWord('Музыка', 'Музыка', tag, 'Music'),
    createWord('Народ', 'Эл', tag, 'People'),
    createWord('Стоп', 'Токто', tag, 'Stop'),
    createWord('Гость', 'Конок', tag, 'Guest'),
    createWord('Качество', 'Сапат', tag, 'Quality'),
    createWord('Свобода', 'Эркиндик, азаттык', tag, 'Freedom'),
    createWord('Очень', 'Абдан, эң', tag, 'Very'),
    createWord('Муж', 'Эр, күйөө', tag, 'Husband'),
    createWord('Жена', 'Аял, катын, зайып', tag, 'Wife'),
    createWord('Мать', 'Эне', tag, 'Mother'),
    createWord('Письмо', 'Кат', tag, 'Letter'),
    createWord('Старик', 'Карыя, чал, абышка', tag, 'Old man'),
    createWord('Седло', 'Ээр', tag, 'Saddle'),
    createWord('Правда', 'Чын, чындык', tag, 'Is it true'),
    createWord('Тоже', 'Да, дагы', tag, 'Same'),
    createWord('Кнут', 'Камчы', tag, 'Whip'),
    createWord('Дружба', 'Достук', tag, 'Friendship'),
    createWord('Звонок', 'Коңгуроо', tag, 'Call'),
    createWord('Путь', 'Жол', tag, 'Way'),
    createWord('Корабль', 'Ship', tag, 'Кеме'),
    createWord('Пиршество', 'Той', tag, 'Feast'),
    createWord('Спорт', 'Спорт', tag, 'Sport'),
    createWord('Коробка', 'Куту', tag, 'Box'),
    createWord('Отмена', 'Жокко чыгаруу, токтотуу', tag, 'Cancel'),
    createWord('Звук', 'Тыбыш', tag, 'Sound')
  ]
}
// Числительные
const numerals = (tag: number): WordEntity[] => {
  return [
    createWord('Число', 'Сан', tag, 'Number'),
    createWord('Ноль', 'Нөл', tag, 'Zero'),
    createWord('Один', 'Бир', tag, 'One'),
    createWord('Два', 'Эки', tag, 'Two'),
    createWord('Три', 'Үч', tag, 'Three'),
    createWord('Четыре', 'Төрт', tag, 'Four'),
    createWord('Пять', 'Беш', tag, 'Five'),
    createWord('Шесть', 'Алты', tag, 'Six'),
    createWord('Семь', 'Жети', tag, 'Seven'),
    createWord('Восемь', 'Сегиз', tag, 'Eight'),
    createWord('Девять', 'Тогуз', tag, 'Nine'),
    createWord('Десять', 'Он', tag, 'Ten'),
    createWord('Одиннадцать', 'Он бир', tag, 'Eleven'),
    createWord('Пятнадцать', 'Он беш', tag, 'Fifteen'),
    createWord('Шестнадцать', 'Он алты', tag, 'Sixteen'),
    createWord('Двадцать', 'Жыйырма', tag, 'Twenty'),
    createWord('Тридцать', 'Отуз', tag, 'Thirty'),
    createWord('Сорок', 'Кырк', tag, 'Forty'),
    createWord('Пятьдесят', 'Элүү', tag, 'Fifty'),
    createWord('Шестьдесят', 'Алтымыш', tag, 'Sixty'),
    createWord('Семьдесят', 'Жетимиш', tag, 'Seventy'),
    createWord('Восемьдесят', 'Сексен', tag, 'Eighty'),
    createWord('Девяносто', 'Токсон', tag, 'Ninety'),
    createWord('Тысяча', 'Миң', tag, 'Thousand')
  ]
}
// Цвета
const colors = (tag: number): WordEntity[] => {
  return [
    createWord('Цвет', 'Түс', tag, 'Color'),
    createWord('Белый', 'Ак', tag, 'White'),
    createWord('Черный', 'Кара', tag, 'Black'),
    createWord('Красный', 'Кызыл', tag, 'Red'),
    createWord('Зеленый', 'Жашыл', tag, 'Green'),
    createWord('Синий', 'Көк', tag, 'Blue'),
    createWord('Желтый', 'Сары', tag, 'Yellow'),
    createWord('Оранжевый', 'Кызгыл сары|Ачык күрөң', tag, 'Orange'),
    createWord('Фиолетовый', 'Кызгылт көк', tag, 'Purple'),
    createWord('Розовый', 'Кызыл, кызгылт', tag, 'Pink'),
    createWord('Коричневый', 'Күрөң', tag, 'Brown'),
    createWord('Серый', 'Боз, сур, көк', tag, 'Gray'),
    createWord('Голубой', 'Көк ачык', tag, 'Light Blue'),
    createWord('Бирюзовый', 'Бирюза түстүү', tag, 'Turquoise'),
    createWord('Лиловый', 'Кызгылт көгүш', tag, 'Lilac'),
    createWord('Песочный', 'Кум түстүү', tag, 'Sand'),
    createWord('Коралловый', 'Шуру (маржан) түстүү', tag, 'Coral'),
    createWord('Золотой', 'Алтын', tag, 'Gold'),
    createWord('Серебряный', 'Күмүш', tag, 'Silver'),
    createWord('Бронзовый', 'Коло түстүү', tag, 'Bronze')
  ]
}
// Фрукты
const fruits = (tag: number): WordEntity[] => {
  return [
    createWord('Фрукт', 'Жемиш, мөмө', tag, 'Fruit'),
    createWord('Яблоко', 'Алма', tag, 'Apple'),
    createWord('Клубника', 'Кулпунай', tag, 'Strawberry'),
    createWord('Малина', 'Данкуурай', tag, 'Raspberry'),
    createWord('Груша', 'Алмурут', tag, 'Pear'),
    createWord('Виноград', 'Жүзүм', tag, 'Grape'),
    createWord('Арбуз', 'Дарбыз', tag, 'Water melon'),
    createWord('Дыня', 'Коон', tag, 'Melon'),
    createWord('Гранат', 'Анар', tag, 'Pomegranate'),
    createWord('Абрикос', 'Өрүк', tag, 'Apricot'),
    createWord('Слива', 'Кара өрүк', tag, 'Plum'),
    createWord('Персик', 'Шабдалы', tag, 'Peach'),
    createWord('Хурма', 'Курма', tag, 'Persimmon'),
    createWord('Смородина', 'Карагат', tag, 'Currant'),
    createWord('Ежевика', 'Бүлдүркөн', tag, 'Blackberry'),
    createWord('Облепиха', 'Чычырканак', tag, 'Guelder-rose'),
    createWord('Апельсин', 'Апельсин', tag, 'Orange'),
    createWord('Вишня', 'Чие', tag, 'Cherry')
  ]
}
// Овощи
const vegetables = (tag: number): WordEntity[] => {
  return [
    createWord('Овощи', 'Жашылчалар', tag, 'Vegetables'),
    createWord('Растение', 'Өсүмдүк', tag, 'Plant'),
    createWord('Картофель', 'Картөшкө', tag, 'Potato'),
    createWord('Морковь', 'Сабиз', tag, 'Carrot'),
    createWord('Лук', 'Пияз', tag, 'Onion'),
    createWord('Перец', 'Калемпир', tag, 'Pepper'),
    createWord('Чеснок', 'Сарымсак', tag, 'Garlic'),
    createWord('Горох', 'Буурчак', tag, 'Peas'),
    createWord('Огурец', 'Бадыраң', tag, 'Cucumber'),
    createWord('Капуста', 'Капуста', tag, 'Cabbage'),
    createWord('Кукуруза', 'Жүгөрү', tag, 'Corn'),
    createWord('Помидор', 'Помидор', tag, 'Tomato'),
    createWord('Тыква', 'Ашкабак', tag, 'Pumpkin'),
    createWord('Салат', 'Салат', tag, 'Lettuce'),
    createWord('Репа', 'Шалкан', tag, 'Turnip'),
    createWord('Редис', 'Чамгыр', tag, 'Radish'),
    createWord('Редька', 'Редька', tag, 'Summer radish'),
    createWord('Баклажан', 'Баклажан', tag, 'Eggplant'),
    createWord('Укроп', 'Ашкөк', tag, 'Dill'),
    createWord('Свекла', 'Кызылча', tag, 'Beetroot'),
    createWord('Кабачок', 'Кабачок', tag, 'Vegetable marrow'),
    createWord('Щавель', 'Ат кулак', tag, 'Sorrel')
  ]
}
// Дом
const house = (tag: number): WordEntity[] => {
  return [
    createWord('Дом', 'Үй', tag, 'House'),
    createWord('Этаж, слой', 'Кабат', tag, 'Floor'),
    createWord('Квартира', 'Батир', tag, 'Apartment'),
    createWord('Дверь', 'Эшик', tag, 'Door'),
    createWord('Окно', 'Терезе', tag, 'Window'),
    createWord('Ложка', 'Кашык', tag, 'Spoon'),
    createWord('Вилка', 'Вилка', tag, 'Fork'),
    createWord('Нож', 'Бычак', tag, 'Knife'),
    createWord('Ключ', 'Ачкыч', tag, 'Key'),
    createWord('Подушка', 'Жаздык', tag, 'Pillow'),
    createWord('Мыло', 'Самын', tag, 'Soap'),
    createWord('Стакан', 'Стакан', tag, 'Cup'),
    createWord('Зеркало', 'Күзгү', tag, 'Mirror'),
    createWord('Тарелка', 'Табак', tag, 'Plate'),
    createWord('Ковёр', 'Килем', tag, 'Carpet'),
    createWord('Веник', 'Шыпыргы', tag, 'Broom'),
    createWord('Чайник', 'Чайнек', tag, 'Kettle'),
    createWord('Стул', 'Отурдук', tag, 'Chair'),
    createWord('Печка', 'Меш', tag, 'Stove'),
    createWord('Совок', 'Калак', tag, 'Dustpan')
  ]
}
// Животные
const animals = (tag: number): WordEntity[] => {
  return [
    createWord('Животное, зверь', 'Айбан', tag, 'Animal'),
    createWord('Кошка', 'Мышык', tag, 'Cat'),
    createWord('Собака', 'Ит', tag, 'Dog'),
    createWord('Корова', 'Уй', tag, 'Cow'),
    createWord('Осёл', 'Эшек', tag, 'Donkey'),
    createWord('Овца', 'Кой', tag, 'Sheep'),
    createWord('Баран (производитель)', 'Кочкор', tag, 'Ram'),
    createWord('Барашек', 'Кочкорок', tag, 'Lamb'),
    createWord('Свинья', 'Чочко', tag, 'Pig'),
    createWord('Поросёнок', 'Торпой', tag, 'Piglet'),
    createWord('Верблюд', 'Төө', tag, 'Camel'),
    createWord('Лягушка', 'Бака', tag, 'Frog'),
    createWord('Коза', 'Эчки', tag, 'Goat'),
    createWord('Бык', 'Бука', tag, 'Bull'),
    createWord('Черепаха', 'Ташбака', tag, 'Turtle'),
    createWord('Кролик', 'Кролик', tag, 'Rabbit'),
    createWord('Лошадь', 'Жылкы', tag, 'Horse'),
    createWord('Жеребёнок', 'Кулун', tag, 'Foal'),
    createWord('Ягнёнок', 'Козу', tag, 'Lamb'),
    createWord('Телёнок', 'Музоо', tag, 'Calf'),
    createWord('Котёнок', 'Мышыктын баласы', tag, 'Kitten'),
    createWord('Щенок', 'Күчүк', tag, 'Puppy')
  ]
}
// Дикие животные
const animalsWild = (tag: number): WordEntity[] => {
  return [
    createWord('Олень', 'Бугу', tag, 'Deer'),
    createWord('Лось', 'Багыш', tag, 'Elk'),
    createWord('Медведь', 'Аюу', tag, 'Bear'),
    createWord('Слон', 'Пил', tag, 'Elephant'),
    createWord('Лев', 'Арстан', tag, 'Lion'),
    createWord('Волк', 'Карышкыр', tag, 'Wolf'),
    createWord('Барс', 'Илбирс', tag, 'Leopard'),
    createWord('Кабан', 'Каман', tag, 'Boar'),
    createWord('Тигр', 'Жолборс', tag, 'Tiger'),
    createWord('Зебра', 'Зебра', tag, 'Zebra'),
    createWord('Жираф', 'Жираф', tag, 'Giraffe'),
    createWord('Носорог', 'Керик', tag, 'Rhinoceros'),
    createWord('Заяц', 'Коён', tag, 'Hare'),
    createWord('Белка', 'Тыйын чычкан', tag, 'Squirrel'),
    createWord('Мышь', 'Чычкан', tag, 'Squirrel'),
    createWord('Ёж', 'Кирпи', tag, 'Hedgehog'),
    createWord('Лиса', 'Түлкү', tag, 'Fox'),
    createWord('Енот', 'Енот', tag, 'Raccoon'),
    createWord('Обезьяна', 'Маймыл', tag, 'Monkey'),
    createWord('Бобр', 'Кемчет', tag, 'Beaver'),
    createWord('Змея', 'Жылан', tag, 'Snake')
  ]
}
// Строения
const buildings = (tag: number): WordEntity[] => {
  return [
    createWord('Строение', 'Имарат', tag, 'Building'),
    createWord('Магазин', 'Дүкөн', tag, 'Shop'),
    createWord('Аптека', 'Дарыкана', tag, 'Pharmacy'),
    createWord('Школа', 'Мектеп', tag, 'School'),
    createWord('Столовая', 'Ашкана', tag, 'Dining room'),
    createWord('Больница', 'Оорукана', tag, 'Hospital'),
    createWord('Гостиница', 'Мейманкана', tag, 'Hotel'),
    createWord('Библиотека', 'Китепкана', tag, 'Library'),
    createWord('Парикмахерская', 'Чачтарач', tag, 'Salon'),
    createWord('Типография', 'Басманкана', tag, 'Printing house'),
    createWord('Туалет', 'Даараткана', tag, 'Toilet'),
    createWord('Ломбард', 'Күрөөкана', tag, 'Pawnshop'),
    createWord('Общежитие', 'Жатакана', tag, 'Pawnshop'),
    createWord('Туалет', 'Ажаткана', tag, 'Toilet')
  ]
}
// Природа
const nature = (tag: number): WordEntity[] => {
  return [
    createWord('Природа', 'Жаратылыш, табият', tag, 'Nature'),
    createWord('Гора', 'Тоо', tag, 'Mountain'),
    createWord('Лес', 'Токой', tag, 'Forest'),
    createWord('Луна', 'Ай', tag, 'Moon'),
    createWord('Озеро', 'Көл', tag, 'Lake'),
    createWord('Дерево', 'Жыгач', tag, 'Tree'),
    createWord('Камень', 'Таш', tag, 'Stone'),
    createWord('Снег', 'Кар', tag, 'Snow'),
    createWord('Поле', 'Талла', tag, 'Field'),
    createWord('Пруд', 'Көлмө', tag, 'Pond'),
    createWord('Зима', 'Кыш', tag, 'Winter'),
    createWord('Весна', 'Жаз', tag, 'Spring'),
    createWord('Лето', 'Жай', tag, 'Summer'),
    createWord('Осень', 'Күз', tag, 'Autumn'),
    createWord('Небо', 'Асман', tag, 'Sky'),
    createWord('Скала', 'Аска, зоо', tag, 'Rock'),
    createWord('Прилив', 'Куюлуш, шыкалыш', tag, 'Tide'),
    createWord('Дождь', 'Жамгыр, жаан', tag, 'Rain')
  ]
}
// Еда
const food = (tag: number): WordEntity[] => {
  return [
    createWord('Еда', 'Тамак', tag, 'Food'),
    createWord('Вкус', 'Даам', tag, 'Taste'),
    createWord('Пища', 'Аш', tag, 'Food'),
    createWord('Вода', 'Суу', tag, 'Water'),
    createWord('Молоко', 'Сүт', tag, 'Milk'),
    createWord('Пиво', 'Сыра', tag, 'Beer'),
    createWord('Водка', 'Арак', tag, 'Vodka'),
    createWord('Мясо', 'Эт', tag, 'Meat'),
    createWord('Хлеб', 'Нан', tag, 'Bread'),
    createWord('Соль', 'Туз', tag, 'Salt'),
    createWord('Гриб', 'Козу карын', tag, 'Mushroom'),
    createWord('Яд', 'Уу', tag, 'Poison'),
    createWord('Мёд', 'Бал', tag, 'Honey'),
    createWord('Мороженное', 'Бал муздак', tag, 'Ice cream'),
    createWord('Топленое масло', 'Сары май', tag, 'Butter'),
    createWord('Суп', 'Сорпо', tag, 'Soup'),
    createWord('Рыба', 'Балык', tag, 'Fish'),
    createWord('Состав', 'Курама', tag, 'Compound'),
    createWord('Сахар в кубиках', 'Кант', tag, 'Sugar cubes'),
    createWord('Сахар', 'Шекер', tag, 'Sugar'),
    createWord('Пряник', 'Пряник', tag, 'Gingerbread'),
    createWord('Имбирь', 'Имбирь', tag, 'Ginger'),
    createWord('Сок', 'Шире', tag, 'Juice'),
    createWord('Шоколад', 'Шоколад', tag, 'Chocolate'),
    createWord('Бутылка', 'Бөтөлкө', tag, 'Bottle')
  ]
}
// Человеческое тело
const humanBody = (tag: number): WordEntity[] => {
  return [
    createWord('Тело', 'Дене', tag, 'Body'),
    createWord('Человек', 'Адам', tag, 'Human'),
    createWord('Голова', 'Баш', tag, 'Head'),
    createWord('Ухо', 'Кулак', tag, 'Ear'),
    createWord('Губа', 'Эрин', tag, 'Lip'),
    createWord('Рот', 'Ооз', tag, 'Mouth'),
    createWord('Глаз', 'Көз', tag, 'Eye'),
    createWord('Нос', 'Мурун', tag, 'Nose'),
    createWord('Палец', 'Бармак', tag, 'Finger'),
    createWord('Рука', 'Кол', tag, 'Hand'),
    createWord('Волос', 'Чач', tag, 'Hair'),
    createWord('Кровь', 'Кан', tag, 'Blood'),
    createWord('Зуб', 'Тиш', tag, 'Tooth'),
    createWord('Нога', 'Бут', tag, 'Leg'),
    createWord('Внутренность', 'Ич', tag, 'Interior'),
    createWord('Борода', 'Сакал', tag, 'Beard'),
    createWord('Ноготь', 'Тырмак', tag, 'Nail'),
    createWord('Попа', 'Кот', tag, 'Ass')
  ]
}

const materials = (tag: number): WordEntity[] => {
  return [
    createWord('Материал', 'Материал', tag, 'Material'),
    createWord('Вещество', 'Зат', tag, 'Substance'),
    createWord('Золото', 'Алтын', tag, 'Gold'),
    createWord('Серебро', 'Күмүш', tag, 'Silver'),
    createWord('Уголь', 'Көмүр', tag, 'Coal'),
    createWord('Железо', 'Темир', tag, 'Iron'),
    createWord('Песок', 'Кум', tag, 'Sand'),
    createWord('Древесина', 'Жыгач', tag, 'Wood'),
    createWord('Бумага', 'Кагаз', tag, 'Paper'),
    createWord('Стекло', 'Айнек', tag, 'Glass'),
    createWord('Табак', 'Тамеки', tag, 'Tobacco'),
    createWord('Кирпич', 'Кыш', tag, 'Brick'),
    createWord('Грязь', 'Кир, баткак', tag, 'Dirt'),
    createWord('Мел', 'Бор', tag, 'Chalk'),
    createWord('Масло', 'Май', tag, 'Oil'),
    createWord('Доска', 'Тактай', tag, 'Board')
  ]
}
// Птицы
const birds = (tag: number): WordEntity[] => {
  return [
    createWord('Птицы', 'Куштар', tag, 'Birds'),
    createWord('Гнездо', 'Уя', tag, 'Nest'),
    createWord('Яйцо (птичье)', 'Жумуртка', tag, 'Egg'),
    createWord('Курица', 'Тоок', tag, 'Hen'),
    createWord('Петух', 'Короз', tag, 'Cock'),
    createWord('Гусь', 'Каз', tag, 'Goose'),
    createWord('Утка', 'Өрдөк', tag, 'Duck'),
    createWord('Голубь', 'Көгүчкөн', tag, 'Pigeon'),
    createWord('Попугай', 'Тоту куш', tag, 'Parrot'),
    createWord('Ворона', 'Карга', tag, 'Crow'),
    createWord('Воробей', 'Таранчы', tag, 'Sparrow'),
    createWord('Орёл', 'Бүркүт', tag, 'Eagle'),
    createWord('Аист', 'Илегилек', tag, 'Stork'),
    createWord('Лебедь', 'Ак куу', tag, 'Swan'),
    createWord('Дятел', 'Тоңкулдак', tag, 'Woodpecker'),
    createWord('Сова', 'Үкү', tag, 'Owl'),
    createWord('Фазан', 'Кыргоол', tag, 'Peacock'),
    createWord('Куропатка', 'Чил', tag, 'Partridge'),
    createWord('Синица', 'Синица', tag, 'Blue-tit'),
    createWord('Индюк', 'Күрп, үндүк', tag, 'Turkey'),
    createWord('Снегирь', 'Снегирь', tag, 'Bullfinch'),
    createWord('Кукушка', 'Күкүк', tag, 'Cuckoo'),
    createWord('Сорока', 'Сагызган', tag, 'Magpie'),
    createWord('Гусёнок', 'Каздын балапаны', tag, 'Gosling'),
    createWord('Утёнок', 'Өрдөктүн балапаны', tag, 'Duckling'),
    createWord('Павлин', 'Тоос', tag, 'Peacock'),
    createWord('Цыплёнок', 'Жөжө', tag, 'Chicken')
  ]
}
// Город и село
const city = (tag: number): WordEntity[] => {
  return [
    createWord('Город', 'Шаар', tag, 'City'),
    createWord('Флаг', 'Желек', tag, 'Flag'),
    createWord('Село, деревня', 'Айыл', tag, 'Village'),
    createWord('Улица', 'Көчө', tag, 'Street'),
    createWord('Площадь', 'Аянт', tag, 'Square'),
    createWord('Мост', 'Көпүрө', tag, 'Bridge'),
    createWord('Торговый центр', 'Соода борбору', tag, 'Shopping mall'),
    createWord('Дорога', 'Жол', tag, 'Road'),
    createWord('Уличный фонарь', 'Панар', tag, 'Street lamp'),
    createWord('Мечеть', 'Мечит', tag, 'Mosque'),
    createWord('Рынок', 'Базар', tag, 'Market'),
    createWord('Сад', 'Бак', tag, 'Garden'),
    createWord('Ресторан', 'Ресторан', tag, 'Restaurant'),
    createWord('Кафе', 'Кичине ресторан', tag, 'Cafe'),
    createWord('Такси', 'Кире', tag, 'Taxi'),
    createWord('Ж/д вокзал', 'Темир жол вокзалы', tag, 'Railway station')
  ]
}
// Профессии
const professions = (tag: number): WordEntity[] => {
  return [
    createWord('Профессия', 'Кесип', tag, 'Profession'),
    createWord('Мастер', 'Уста', tag, 'Master'),
    createWord('Строитель', 'Куруучу', tag, 'Builder'),
    createWord('Учитель', 'Мугалим', tag, 'Teacher'),
    createWord('Преподаватель', 'Окутуучу', tag, 'Teacher'),
    createWord('Рыбак', 'Балыкчы', tag, 'Fisherman'),
    createWord('Мыловар', 'Самынчы', tag, 'Soap maker'),
    createWord('Плотник', 'Жыгач устасы', tag, 'Carpenter'),
    createWord('Певец, поэт', 'Ырчы', tag, 'Singer'),
    createWord('Историк', 'Тарыхчы', tag, 'Historian'),
    createWord('Лётчик', 'Учуучу', tag, 'Pilot'),
    createWord('Продавец', 'Сатуучу', tag, 'Salesman'),
    createWord('Программист', 'Программист', tag, 'Programmer'),
    createWord('Алкоголик', 'Аракеч', tag, 'Alcoholic'),
    createWord('Стекловар', 'Айнек кайнатуучу', tag, 'Glassmaker')
  ]
}
// Одежда
const clothes = (tag: number): WordEntity[] => {
  return [
    createWord('Одежда', 'Кийим', tag, 'Clothes'),
    createWord('Обувь', 'Бут кийим', tag, 'Shoes'),
    createWord('Рубашка', 'Көйнөк', tag, 'Shirt'),
    createWord('Шуба', 'Тон', tag, 'Fur coat'),
    createWord('Перчатки', 'Кол кап', tag, 'Gloves'),
    createWord('Штаны', 'Шым', tag, 'Pants'),
    createWord('Носки', 'Байпак', tag, 'Socks'),
    createWord('Платок', 'Жоолук', tag, 'Headscarf'),
    createWord('Пуговица', 'Топчу', tag, 'Button'),
    createWord('Часы', 'Саат', tag, 'Watch')
  ]
}
// Прилагательные
const adjectives = (tag: number): WordEntity[] => {
  return [
    createWord('Прилагательное', 'Сын атооч', tag, 'Adjective'),
    createWord('Большой', 'Чоң', tag, 'Big'),
    createWord('Маленький', 'Кичине', tag, 'Small'),
    createWord('Умный', 'Акылдуу', tag, 'Smart'),
    createWord('Внутренний', 'Ички', tag, 'Internal'),
    createWord('Чистый', 'Таза', tag, 'Clean'),
    createWord('Сладкий', 'Таттуу', tag, 'Sweet'),
    createWord('Горький', 'Ачуу', tag, 'Bitter'),
    createWord('Горячий', 'Ысык', tag, 'Hot'),
    createWord('Вкусный', 'Даамдуу', tag, 'Delicious'),
    createWord('Кислый', 'Кычкыл', tag, 'Sour'),
    createWord('Острый', 'Өткүр', tag, 'Spicy'),
    createWord('Новый', 'Жаңы', tag, 'New'),
    createWord('Хитрый (лукавый)', 'Куу', tag, 'Cunning'),
    createWord('Густой, частый', 'Калың', tag, 'Thick, frequent'),
    createWord('Губастый', 'Калың эриндүү', tag, 'Thick-lipped'),
    createWord('Тяжёлый', 'Оор', tag, 'Heavy'),
    createWord('Легкий', 'Оной', tag, 'Easy'),
    createWord('Святой', 'Олуя, касиеттүү', tag, 'Saint'),
    createWord('Сырой, влажный', 'Өл', tag, 'Wet'),
    createWord('Ожидающий', 'Күтүүдө', tag, 'Pending'),
  ]
}
// Глаголы
const verbs = (tag: number): WordEntity[] => {
  return [
    createWord('Глагол', 'Этиш', tag, 'Verb'),
    createWord('Входить', 'Кирүү', tag, 'Enter'),
    createWord('Выходить', 'Чыгуу', tag, 'Leave'),
    createWord('Играть', 'Ойноо', tag, 'Play'),
    createWord('Летать', 'Учуу', tag, 'Fly'),
    createWord('Учиться', 'Окуу', tag, 'Study'),
    createWord('Быть, становится', 'Бол', tag, 'Be'),
    createWord('Кипятить', 'Кайнатуу', tag, 'Boil'),
    createWord('Пить', 'Ичүү', tag, 'Drink'),
    createWord('Продавать', 'Сат', tag, 'Sell'),
    createWord('Умереть', 'Өл', tag, 'Die'),
    createWord('Писать', 'Жазуу', tag, 'Write')
  ]
}
// Цветы
const flowers = (tag: number): WordEntity[] => {
  return [
    createWord('Цветы', 'Гүлдөр', tag, 'Flowers'),
    createWord('Георгин', 'Георгин', tag, 'Dahlia'),
    createWord('Мак', 'Кызгалдак', tag, 'Poppy'),
    createWord('Астра', 'Астра', tag, 'Aster'),
    createWord('Ромашка', 'Ромашка', tag, 'Chamomile'),
    createWord('Тюльпан', 'Жоогазын', tag, 'Tulip'),
    createWord('Голубой колокольчик', 'Көк коңгуроо', tag, 'Blue bell'),
    createWord('Лилия', 'Лилия', tag, 'Lily'),
    createWord('Пион', 'Пион', tag, 'Peony'),
    createWord('Василёк', 'Кекире', tag, 'Corn-flower'),
    createWord('Орхидея', 'Орхидея', tag, 'Orchid'),
    createWord('Ландыш', 'Ландыш', tag, 'Lily valley'),
    createWord('Нарцисс', 'Нарцисс', tag, 'Narcissus')
  ]
}
// Насекомые
const insects = (tag: number): WordEntity[] => {
  return [
    createWord('Насекомое', 'Курт-кумурска', tag, 'Insect'),
    createWord('Муравей', 'Кумурска', tag, 'Ant'),
    createWord('Бабочка', 'Көпөлөк', tag, 'Butterfly'),
    createWord('Таракан', 'Таракан', tag, 'Cockroach'),
    createWord('Оса', 'Аары', tag, 'Wasp'),
    createWord('Шмель', 'Аары', tag, 'Bumblebee'),
    createWord('Пчела', 'Бал аарысы', tag, 'Bee'),
    createWord('Муха', 'Чымын', tag, 'Fly')
  ]
}
// Время
const time = (tag: number): WordEntity[] => {
  return [
    createWord('Время', 'Убакыт', tag, 'Time'),
    createWord('Секунда', 'Секунда', tag, 'Second'),
    createWord('Вчера', 'Кечээ', tag, 'Yesterday'),
    createWord('Вечер', 'Кеч', tag, 'Evening'),
    createWord('Сегодня', 'Бүгүн', tag, 'Today'),
    createWord('Завтра', 'Эртең', tag, 'Tomorrow'),
    createWord('Минута', 'Минута', tag, 'Minute'),
    createWord('Час', 'Саат', tag, 'Hour'),
    createWord('Месяц', 'Ай', tag, 'Month'),
    createWord('Год', 'Жыл', tag, 'Year'),
    createWord('Век', 'Кылым', tag, 'Century'),
    createWord('Ночь', 'Түн', tag, 'Night'),
    createWord('Понедельник', 'Дүйшөмбү', tag, 'Monday'),
    createWord('Вторник', 'Шейшемби', tag, 'Tuesday'),
    createWord('Среда', 'Шаршемби', tag, 'Wednesday'),
    createWord('Четверг', 'Бейшемби', tag, 'Thursday'),
    createWord('Пятница', 'Жума', tag, 'Friday'),
    createWord('Суббота', 'Ишемби', tag, 'Saturday'),
    createWord('Воскресенье', 'Жекшемби', tag, 'Sunday'),
    createWord('Январь', 'Үчтүн айы', tag, 'January'),
    createWord('Февраль', 'Бирдин айы', tag, 'February'),
    createWord('Март', 'Жалган куран', tag, 'March'),
    createWord('Апрель', 'Чын куран', tag, 'April'),
    createWord('Май', 'Бугу', tag, 'May'),
    createWord('Июнь', 'Кулжа', tag, 'June'),
    createWord('Июль', 'Теке', tag, 'July'),
    createWord('Август', 'Баш оона', tag, 'August'),
    createWord('Сентябрь', 'Аяк оона', tag, 'September'),
    createWord('Октябрь', 'Тогуздун айы', tag, 'October'),
    createWord('Ноябрь', 'Жетинин айы', tag, 'November'),
    createWord('Декабрь', 'Бештин айы', tag, 'December')
  ]
}
// Страны
const countries = (tag: number): WordEntity[] => {
  return [
    createWord('Страна', 'Өлкө', tag, 'Country'),
    createWord('География', 'География', tag, 'Geography'),
    createWord('Турция', 'Түркия', tag, 'Turkey'),
    createWord('Россия', 'Орусия', tag, 'Russia'),
    createWord('Узбекистан', 'Өзбекстан', tag, 'Uzbekistan'),
    createWord('Казахстан', 'Казахстан', tag, 'Kazakhstan'),
    createWord('Япония', 'Жапония', tag, 'Japan'),
    createWord('Азербайджан', 'Азербайжан', tag, 'Azerbaijan'),
    createWord('Таджикистан', 'Тажикстан', tag, 'Tajikistan'),
    createWord('Греция', 'Грекия', tag, 'Greece'),
    createWord('Китай', 'Кытай', tag, 'China')
  ]
}
// Инструменты
const tools = (tag: number): WordEntity[] => {
  return [
    createWord('Инструмент', 'Аспап, шайман', tag, 'Tool'),
    createWord('Молоток', 'Балка', tag, 'Hammer'),
    createWord('Пила', 'Араа', tag, 'Saw'),
    createWord('Шило', 'Шибеге', tag, 'Awl'),
    createWord('Ножницы', 'Кайчы', tag, 'Scissors'),
    createWord('Винт, бурав', 'Бурама', tag, 'Screw'),
    createWord('Отвёртка', 'Бурагыч', tag, 'Screwdriver'),
    createWord('Кувалда', 'Барскан', tag, 'Sledgehammer'),
    createWord('Ножовка', 'Кол араа', tag, 'Hacksaw'),
    createWord('Серп', 'Орок', tag, 'Sickle'),
    createWord('Уровень', 'Деңгээл', tag, 'Level'),
    createWord('Топор', 'Балта', tag, 'Axe')
  ]
}

// Рыбы
const fishes = (tag: number): WordEntity[] => {
  return [
    // Рыбы
    createWord('Акула', 'Акула', tag, 'Shark'),
    createWord('Тунец', 'Тунец', tag, 'Tuna'),
    createWord('Лосось', 'Семга', tag, 'Salmon'),
    createWord('Форель', 'Күн чабак', tag, 'Trout'),
    createWord('Сельдь', 'Сельдь', tag, 'Herring'),
    createWord('Карп', 'Карп', tag, 'Carp'),
    createWord('Щука', 'Чортон', tag, 'Pike'),
    createWord('Сом', 'Сом', tag, 'Catfish'),
    createWord('Скат', 'Скат', tag, 'Ray'),
    createWord('Окунь', 'Балык окунь', tag, 'Perch'),
    createWord('Морской конек', 'Деңиз ат', tag, 'Seahorse'),
    createWord('Дорадо', 'Дорадо', tag, 'Dorado'),
    createWord('Барракуда', 'Барракуда', tag, 'Barracuda'),
    createWord('Мерлуза', 'Мерлуза', tag, 'Hake'),
    createWord('Анчоус', 'Анчоус', tag, 'Anchovy'),
    createWord('Камбала', 'Түрпөй балык', tag, 'Flounder'),
    createWord('Треска', 'Треска', tag, 'Cod'),
    createWord('Осетр', 'Осетр', tag, 'Sturgeon'),
    createWord('Палтус', 'Палтус', tag, 'Halibut'),
    createWord('Меч-рыба', 'Кылыч балык', tag, 'Swordfish'),
    createWord('Группер', 'Группер', tag, 'Grouper'),
    createWord('Сардины', 'Сардины', tag, 'Sardines'),
    createWord('Морской окунь', 'Деңиз окунь', tag, 'Sea Bass'),
    createWord('Золотая рыбка', 'Алтын балык', tag, 'Goldfish'),
    createWord('Карась', 'Карась', tag, 'Crucian')
  ]
}

// География
const geography = (tag: number): WordEntity[] => {
  return [
    createWord('Море', 'Деңиз', tag, 'Sea'),
    createWord('Пустыня', 'Чөл', tag, 'Desert'),
    createWord('Река', 'Дарыя', tag, 'River'),
    createWord('Долина', 'Өрөөн', tag, 'Valley'),
    createWord('Пролив', 'Кысык', tag, 'Strait'),
  ]
}

const WORDS: WordEntity[] = [
  ...common(1),
  ...numerals(2),
  ...colors(3),
  ...fruits(4),
  ...vegetables(5),
  ...house(6),
  ...animals(7),
  ...animalsWild(8),
  ...buildings(9),
  ...nature(10),
  ...food(11),
  ...humanBody(12),
  ...materials(13),
  ...birds(14),
  ...city(15),
  ...professions(16),
  ...clothes(17),
  ...adjectives(18),
  ...verbs(19),
  ...flowers(20),
  ...insects(21),
  ...time(22),
  ...countries(23),
  ...tools(24),
  ...fishes(25),
  ...geography(26)
]

export { TAGS, WORDS }