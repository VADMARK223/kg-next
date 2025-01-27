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
  { id: 11, name: 'Еда', color: '#9A3412' },
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
  { id: 26, name: 'География', color: '#00640F' },
  { id: 27, name: 'Семья', color: '#FFC0CB' },
  { id: 28, name: 'Школа', color: '#FFD700' },
  { id: 29, name: 'Местоимения', color: '#D3D3D3' },
  { id: 30, name: 'Напитки', color: '#4682B4' }
]

const createWord = (ru: string, kg: string, tag: number, en: string): WordEntity => {
  return { id: 0, ru: ru, kg: kg, tag: tag, en: en }
}

// Разное
const common = (tag: number): WordEntity[] => {
  return [
    createWord('Работа', 'Иш, жумуш', tag, 'Job, work'),
    createWord('Игра', 'Оюн', tag, 'Game'),
    createWord('Начальник, сумка', 'Баштык', tag, 'Boss, bag'),
    createWord('Песня', 'Ыр', tag, 'Song'),
    createWord('Равно', 'Барабар', tag, 'Equals'),
    createWord('Больше', 'Чоң', tag, 'More'),
    createWord('Шаг', 'Кадам, арыш', tag, 'Step'),
    createWord('Плюс', 'Кошуу белгиси', tag, 'Plus'),
    createWord('Умножение', 'Көбөйтүү', tag, 'Multiplication'),
    createWord('Деление', 'Бөлүү', tag, 'Division'),
    createWord('Знак, метка', 'Белги', tag, 'Sing, mark'),
    createWord('Деньги', 'Акча', tag, 'Money'),
    createWord('Лопата', 'Күрөк', tag, 'Shovel'),
    createWord('Хорошо', 'Жакшы', tag, 'Fine'),
    createWord('Плохо', 'Жаман', tag, 'Badly'),
    createWord('Кино', 'Кино', tag, 'Movie'),
    createWord('Полет', 'Учуу', tag, 'Flight'),
    createWord('Ад', 'Тозок', tag, 'Hell'),
    createWord('Господин', 'Мырза', tag, 'Mister'),
    createWord('Конец', 'Аяктоо', tag, 'End'),
    createWord('Мечта', 'Кыял', tag, 'Dream'),
    createWord('Да', 'Ооба', tag, 'Yes'),
    createWord('Почет, уважение', 'Урмат', tag, 'Honor, respect'),
    createWord('Нет', 'Жок', tag, 'No'),
    createWord('Или', 'Же', tag, 'Or'),
    createWord('И', 'Жана', tag, 'And'),
    createWord('Не', 'Эмне, эмес', tag, 'Not'),
    createWord('Поиск', 'Издөө', tag, 'Search'),
    createWord('Армия', 'Аскер', tag, 'Army'),
    createWord('Победа', 'Жеңиш', tag, 'Victory'),
    createWord('Подарок', 'Белек', tag, 'Present'),
    createWord('Фото', 'Сүрөт', tag, 'Photo'),
    createWord('Голос', 'Үн', tag, 'Voice'),
    createWord('Жизнь', 'Жашоо, жан', tag, 'Life'),
    createWord('Промежуток', 'Ара', tag, 'Interval'),
    createWord('Копейка', 'Тыйын', tag, 'Kopeyka'),
    createWord('Колокол', 'Коңгуроо', tag, 'Bell'),
    createWord('Мудрость', 'Акылмандык, даанышмандык', tag, 'Wisdom'),
    createWord('Здоровье', 'Саламаттык, ден соолук', tag, 'Health'),
    createWord('Спасибо', 'Рахмат, ыракмат', tag, 'Thank you'),
    createWord('Польза', 'Пайда', tag, 'Benefit'),
    createWord('Любовь', 'Сүйүү', tag, 'Love'),
    createWord('Надежда', 'Үмүт', tag, 'Hope'),
    createWord('Лекарство', 'Дары', tag, 'Medicine'),
    createWord('Чудо, диво', 'Керемет', tag, 'Miracle, wonder'),
    createWord('Пена', 'Көбүк', tag, 'Foam'),
    createWord('Сон', 'Уйку', tag, 'Sleep'),
    createWord('Рейс', 'Каттам', tag, 'Flight'),
    createWord('Обычай, повадка', 'Салт', tag, 'Custom, habit'),
    createWord('Важность; достоинство', 'Салт', tag, 'Importance; dignity'),
    createWord('Труд', 'Эмгек', tag, 'Work'),
    createWord('Служба', 'Кызмат', tag, 'Service'),
    createWord('Скорость', 'Тездик, ылдамдык', tag, 'Speed'),
    createWord('Мусор', 'Таштанды, Шыпырынды', tag, 'Garbage'),
    createWord('Друг', 'Дос', tag, 'Friend'),
    createWord('Друзья', 'Достор', tag, 'Friends'),
    createWord('Музыка', 'Музыка', tag, 'Music'),
    createWord('Вручную', 'Кол менен', tag, 'Manually'),
    createWord('Народ', 'Эл', tag, 'People'),
    createWord('Стоп', 'Токто', tag, 'Stop'),
    createWord('Гость', 'Конок', tag, 'Guest'),
    createWord('Качество', 'Сапат', tag, 'Quality'),
    createWord('Свобода', 'Эркиндик, азаттык', tag, 'Freedom'),
    createWord('Очень', 'Абдан, эң', tag, 'Very'),
    createWord('Письмо', 'Кат', tag, 'Letter'),
    createWord('Старик', 'Карыя, чал, абышка', tag, 'Old man'),
    createWord('Седло', 'Ээр', tag, 'Saddle'),
    createWord('Правда', 'Чын, чындык', tag, 'Is it true'),
    createWord('Тоже', 'Да, дагы', tag, 'Same'),
    createWord('Кнут', 'Камчы', tag, 'Whip'),
    createWord('Богатырь', 'Баатыр', tag, 'Hero'),
    createWord('Дружба', 'Достук', tag, 'Friendship'),
    createWord('Звонок', 'Коңгуроо', tag, 'Call'),
    createWord('Путь, дорога', 'Жол', tag, 'Road'),
    createWord('Корабль', 'Кеме', tag, 'Ship'),
    createWord('Пиршество', 'Той', tag, 'Feast'),
    createWord('Спорт', 'Спорт', tag, 'Sport'),
    createWord('Коробка', 'Куту', tag, 'Box'),
    createWord('Штраф', 'Штраф', tag, 'Fine'),
    createWord('Успех, удача', 'Береке', tag, 'Success'),
    createWord('Стирка', 'Жууш, кир жууш', tag, 'Washing'),
    createWord('Отмена', 'Жокко чыгаруу, токтотуу', tag, 'Cancel'),
    createWord('Привет', 'Салам', tag, 'Hello'),
    createWord('Спасибо', 'Рахмат', tag, 'Thank you'),
    createWord('Ремонт', 'Оңдоо', tag, 'Repair'),
    createWord('Сила', 'Күч', tag, 'Strength, power'),
    createWord('Шутка', 'Тамаша', tag, 'Joke'),
    createWord('Свет', 'Жарык', tag, 'Light'),
    createWord('Свеча', 'Шам', tag, 'Candle'),
    createWord('Луч света', 'Нур', tag, 'Ray of light'),
    createWord('Праздник', 'Майрам', tag, 'Holiday'),
    createWord('Новость', 'Жаңылык', tag, 'News'),
    createWord('Рукоятка', 'Сап', tag, 'Lever'),
    createWord('Ряд', 'Катар, тизмек', tag, 'Row'),
    createWord('Дурак', 'Акмак', tag, 'Fool'),
    createWord('Колесо', 'Дөңгөлөк', tag, 'Wheel'),
    createWord('Разговор', 'Сүйлөш', tag, 'Talk'),
    createWord('Вещь', 'Нерсе', tag, 'Thing'),
    createWord('Опасность', 'Коркунуч', tag, 'Danger'),
    createWord('Страх, боязнь', 'Кооп', tag, 'Fear'),
    createWord('Пламя', 'От', tag, 'Flame'),
    createWord('Огонь (пламя)', 'От', tag, 'Fire (flame)'),
    createWord('Пожар', 'Өрт', tag, 'Fire'),
    createWord('Предмет', 'Нерсе', tag, 'Item'),
    createWord('Разговорник', 'Сүйлөшмө', tag, 'Phrasebook'),
    createWord('Красота (человек)', 'Сулуулук', tag, 'Beauty (human)'),
    createWord('Гид', 'Гид', tag, 'Guide'),
    createWord('Затем, после, за', 'Соң', tag, 'Then, after'),
    createWord('Для', 'Үчүн', tag, 'For'),
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
    createWord('Кровать', 'Керебет', tag, 'Bed'),
    createWord('Ложка', 'Кашык', tag, 'Spoon'),
    createWord('Вилка', 'Вилка', tag, 'Fork'),
    createWord('Нож', 'Бычак', tag, 'Knife'),
    createWord('Ключ', 'Ачкыч', tag, 'Key'),
    createWord('Подушка', 'Жаздык', tag, 'Pillow'),
    createWord('Мыло', 'Самын', tag, 'Soap'),
    createWord('Стакан', 'Стакан', tag, 'Cup'),
    createWord('Зеркало', 'Күзгү', tag, 'Mirror'),
    createWord('Тарелка', 'Табак', tag, 'Plate'),
    createWord('Ковер', 'Килем', tag, 'Carpet'),
    createWord('Веник', 'Шыпыргы', tag, 'Broom'),
    createWord('Чайник', 'Чайдоос, чайнек', tag, 'Kettle'),
    createWord('Стул', 'Отурдук', tag, 'Chair'),
    createWord('Стол', 'Үстөл', tag, 'Table'),
    createWord('Полотенце', 'Сүлгү', tag, 'Towel'),
    createWord('Баня', 'Мончо', tag, 'Bathhouse'),
    createWord('Утюг', 'Үтүк', tag, 'Iron'),
    createWord('Печка', 'Меш', tag, 'Stove'),
    createWord('Сейф', 'Сейф', tag, 'Safe'),
    createWord('Расческа', 'Тарак', tag, 'Comb'),
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
    createWord('Поросенок', 'Торпой', tag, 'Piglet'),
    createWord('Верблюд', 'Төө', tag, 'Camel'),
    createWord('Лягушка', 'Бака', tag, 'Frog'),
    createWord('Коза', 'Эчки', tag, 'Goat'),
    createWord('Бык', 'Бука', tag, 'Bull'),
    createWord('Черепаха', 'Ташбака', tag, 'Turtle'),
    createWord('Кролик', 'Кролик', tag, 'Rabbit'),
    createWord('Лошадь', 'Жылкы', tag, 'Horse'),
    createWord('Жеребенок', 'Кулун', tag, 'Foal'),
    createWord('Ягненок', 'Козу', tag, 'Lamb'),
    createWord('Теленок', 'Музоо', tag, 'Calf'),
    createWord('Котенок', 'Мышыктын баласы', tag, 'Kitten'),
    createWord('Козленок', 'Улак', tag, 'Kid'),
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
    createWord('Стая', 'Үйүр, топ', tag, 'Pack, flock'),
    createWord('Змея', 'Жылан', tag, 'Snake')
  ]
}
// Строения
const buildings = (tag: number): WordEntity[] => {
  return [
    createWord('Строение, здание', 'Имарат', tag, 'Building'),
    createWord('План, проект', 'Жобо', tag, 'Plan, project'),
    createWord('Магазин', 'Дүкөн', tag, 'Shop'),
    createWord('Аптека', 'Дарыкана', tag, 'Pharmacy'),
    createWord('Школа', 'Мектеп', tag, 'School'),
    createWord('Башня', 'Мурана', tag, 'Tower'),
    createWord('Столовая', 'Ашкана', tag, 'Dining room'),
    createWord('Больница', 'Оорукана', tag, 'Hospital'),
    createWord('Гостиница', 'Мейманкана', tag, 'Hotel'),
    createWord('Библиотека', 'Китепкана', tag, 'Library'),
    createWord('Парикмахерская', 'Чачтарач', tag, 'Salon'),
    createWord('Типография', 'Басманкана', tag, 'Printing house'),
    createWord('Туалет', 'Даараткана', tag, 'Toilet'),
    createWord('Ломбард', 'Күрөөкана', tag, 'Pawnshop'),
    createWord('Общежитие', 'Жатакана', tag, 'Pawnshop'),
    createWord('Суд', 'Сот', tag, 'Court'),
    createWord('Банк', 'Банк', tag, 'Bank'),
    createWord('Двор', 'Короо', tag, 'Yard'),
    createWord('Крепость', 'Сепил', tag, 'Fortress'),
    createWord('Посольство', 'Элчилик', tag, 'Embassy'),
    createWord('Музей', 'Музей', tag, 'Museum'),
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
    createWord('Солнце', 'Күн', tag, 'Sun'),
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
    createWord('Звезда', 'Жылдыз', tag, 'Star'),
    createWord('Земля', 'Жер', tag, 'Earth'),
    createWord('Океан', 'Океан', tag, 'Ocean'),
    createWord('Климат', 'Климат', tag, 'Climate'),
    createWord('Шторм', 'Шамал', tag, 'Storm'),
    createWord('Течение (струя, ток)', 'Агым, агын, агыш', tag, 'Flow'),
    createWord('Струя', 'Агуу, агыш, агым', tag, 'Jet'),
    createWord('Дождь', 'Жамгыр, жаан', tag, 'Rain'),
    createWord('Воздух', 'Аба', tag, 'Air'),
    createWord('Корень (растений)', 'Тамыр', tag, 'Root (of plants)'),
    createWord('Красота (природа)', 'Кооздук', tag, 'Beauty (nature)'),
    createWord('Капля', 'Тамчы', tag, 'A drop')
  ]
}
// Еда
const food = (tag: number): WordEntity[] => {
  return [
    createWord('Еда', 'Тамак', tag, 'Food'),
    createWord('Вкус', 'Даам', tag, 'Taste'),
    createWord('Аппетит', 'Ичтээк', tag, 'Appetite'),
    createWord('Пища', 'Аш', tag, 'Food'),
    createWord('Мясо', 'Эт', tag, 'Meat'),
    createWord('Хлеб', 'Нан', tag, 'Bread'),
    createWord('Соль', 'Туз', tag, 'Salt'),
    createWord('Гриб', 'Козу карын', tag, 'Mushroom'),
    createWord('Яд', 'Уу', tag, 'Poison'),
    createWord('Мороженное', 'Бал муздак', tag, 'Ice cream'),
    createWord('Топленое масло', 'Сары май', tag, 'Butter'),
    createWord('Суп', 'Сорпо', tag, 'Soup'),
    createWord('Рыба', 'Балык', tag, 'Fish'),
    createWord('Состав', 'Курама', tag, 'Compound'),
    createWord('Сахар в кубиках', 'Кант', tag, 'Sugar cubes'),
    createWord('Сахар', 'Шекер', tag, 'Sugar'),
    createWord('Пряник', 'Пряник', tag, 'Gingerbread'),
    createWord('Имбирь', 'Имбирь', tag, 'Ginger'),
    createWord('Рис', 'Күрүч', tag, 'Rice'),
    createWord('Пицца', 'Пицца', tag, 'Pizza'),
    createWord('Мука', 'Ун', tag, 'Flour'),
    createWord('Яйцо (еда)', 'Жумуртка', tag, 'Egg'),
    createWord('Шоколад', 'Шоколад', tag, 'Chocolate'),
    createWord('Продукт, продукция', 'Азык', tag, 'Product, products')
  ]
}
// Человеческое тело
const humanBody = (tag: number): WordEntity[] => {
  return [
    createWord('Тело', 'Дене', tag, 'Body'),
    createWord('Человек', 'Адам, киши', tag, 'Human'),
    createWord('Голова', 'Баш', tag, 'Head'),
    createWord('Ухо', 'Кулак', tag, 'Ear'),
    createWord('Губа', 'Эрин', tag, 'Lip'),
    createWord('Шея', 'Моюн', tag, 'Neck'),
    createWord('Рот', 'Ооз', tag, 'Mouth'),
    createWord('Глаз', 'Көз', tag, 'Eye'),
    createWord('Нос', 'Мурун', tag, 'Nose'),
    createWord('Палец', 'Бармак', tag, 'Finger'),
    createWord('Пот', 'Тер', tag, 'Sweat'),
    createWord('Рука', 'Кол', tag, 'Hand'),
    createWord('Сердце', 'Жүрөк', tag, 'Heart'),
    createWord('Волос', 'Чач', tag, 'Hair'),
    createWord('Лицо', 'Жүз', tag, 'Face'),
    createWord('Кровь', 'Кан', tag, 'Blood'),
    createWord('Зуб', 'Тиш', tag, 'Tooth'),
    createWord('Нога', 'Бут', tag, 'Leg'),
    createWord('Внутренность', 'Ич', tag, 'Interior'),
    createWord('Борода', 'Сакал', tag, 'Beard'),
    createWord('Ноготь', 'Тырмак', tag, 'Nail'),
    createWord('Язык', 'Тил', tag, 'Tongue'),
    createWord('Веко', 'Кабак', tag, 'Eyelid'),
    createWord('Мозг', 'Мээ', tag, 'Brain'),
    createWord('Ус', 'Мурут', tag, 'Moustache'),
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
    createWord('Гусенок', 'Каздын балапаны', tag, 'Gosling'),
    createWord('Утенок', 'Өрдөктүн балапаны', tag, 'Duckling'),
    createWord('Павлин', 'Тоос', tag, 'Peacock'),
    createWord('Удод', 'Үпүп', tag, 'Hoopoe'),
    createWord('Журавль', 'Турна', tag, 'Crane'),
    createWord('Чайка', 'Ак чардак', tag, 'Gull'),
    createWord('Цыпленок', 'Жөжө', tag, 'Chicken')
  ]
}
// Город и село
const city = (tag: number): WordEntity[] => {
  return [
    createWord('Город', 'Шаар', tag, 'City'),
    createWord('Флаг', 'Желек', tag, 'Flag'),
    createWord('Село, деревня', 'Айыл', tag, 'Village'),
    createWord('Дворец', 'Сарай', tag, 'Palace, castle, mansion'),
    createWord('Улица', 'Көчө', tag, 'Street'),
    createWord('Площадь', 'Аянт', tag, 'Square'),
    createWord('Мост', 'Көпүрө', tag, 'Bridge'),
    createWord('Торговый центр', 'Соода борбору', tag, 'Shopping mall'),
    createWord('Дорога', 'Жол', tag, 'Road'),
    createWord('Уличный фонарь', 'Панар', tag, 'Street lamp'),
    createWord('Мечеть', 'Мечит', tag, 'Mosque'),
    createWord('Рынок', 'Базар', tag, 'Market'),
    createWord('Сад', 'Бакча', tag, 'Garden'),
    createWord('Ресторан', 'Ресторан', tag, 'Restaurant'),
    createWord('Кафе', 'Кичине ресторан', tag, 'Cafe'),
    createWord('Такси', 'Кире', tag, 'Taxi'),
    createWord('Памятник', 'Эстелик', tag, 'Monument'),
    createWord('Аэропорт', 'Аэропорт', tag, 'Airport'),
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
    createWord('Летчик, пилот', 'Учкуч', tag, 'Pilot'),
    createWord('Продавец', 'Сатуучу', tag, 'Salesman'),
    createWord('Программист', 'Программист', tag, 'Programmer'),
    createWord('Переводчик', 'Котормочу', tag, 'Translator'),
    createWord('Алкоголик', 'Аракеч', tag, 'Alcoholic'),
    createWord('Военный', 'Аскер', tag, 'Military'),
    createWord('Прокурор', 'Прокурор', tag, 'Prosecutor'),
    createWord('Стекловар', 'Айнек кайнатуучу', tag, 'Glassmaker')
  ]
}
// Одежда
const clothes = (tag: number): WordEntity[] => {
  return [
    createWord('Одежда', 'Кийим', tag, 'Clothes'),
    createWord('Обувь', 'Бут кийим', tag, 'Shoes'),
    createWord('Рубашка', 'Көйнөк', tag, 'Shirt'),
    createWord('Шуба', 'Тон, ичик', tag, 'Fur coat'),
    createWord('Перчатки', 'Кол кап', tag, 'Gloves'),
    createWord('Штаны', 'Шым, дамбал', tag, 'Pants'),
    createWord('Носки', 'Кыска байпак', tag, 'Socks'),
    createWord('Носок', 'Тумшук', tag, 'Sock'),
    createWord('Платок', 'Жоолук', tag, 'Headscarf'),
    createWord('Пуговица', 'Топчу', tag, 'Button'),
    createWord('Бельё (для стирки)', 'Кир', tag, 'Laundry'),
    createWord('Бельё (Нижняя одежда)', 'Ич кийим', tag, 'Underwear'),
    createWord('Трусы', 'Чолок дамбал', tag, 'Underpants'),
    createWord('Кальсоны, штаны', 'Дамбал', tag, 'Trousers'),
    createWord('Майка', 'Майка', tag, 'T-shirt'),
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
    createWord('Быстрый', 'Тез, ылдам, шар', tag, 'Fast'),
    createWord('Сладкий', 'Таттуу', tag, 'Sweet'),
    createWord('Горький', 'Ачуу', tag, 'Bitter'),
    createWord('Горячий', 'Ысык', tag, 'Hot'),
    createWord('Вкусный', 'Даамдуу', tag, 'Delicious'),
    createWord('Кислый', 'Кычкыл', tag, 'Sour'),
    createWord('Острый', 'Өткүр', tag, 'Spicy'),
    createWord('Новый', 'Жаңы', tag, 'New'),
    createWord('Богатый', 'Бай', tag, 'Rich'),
    createWord('Хитрый (лукавый)', 'Куу', tag, 'Cunning'),
    createWord('Мелкий', 'Майда', tag, 'Small'),
    createWord('Густой, частый', 'Калың', tag, 'Thick, frequent'),
    createWord('Губастый', 'Калың эриндүү', tag, 'Thick-lipped'),
    createWord('Тяжёлый', 'Оор', tag, 'Heavy'),
    createWord('Круглый', 'Тегерек, тоголок', tag, 'Round'),
    createWord('Легкий', 'Оной', tag, 'Easy'),
    createWord('Святой', 'Олуя, касиеттүү', tag, 'Saint'),
    createWord('Молодой', 'Жаш', tag, 'Young'),
    createWord('Глупый', 'Акмак', tag, 'Stupid, silly'),
    createWord('Мудрый', 'Даанышман', tag, 'Wise'),
    createWord('Сырой, влажный', 'Өл', tag, 'Wet'),
    createWord('Холодный, студеный', 'Муздак', tag, 'Cold'),
    createWord('Светлый, лучезарный', 'Жаркын', tag, 'Light, radiant'),
    createWord('Короткий, краткий', 'Кыска', tag, 'Short, brief'),
    createWord('Последний; последующий', 'Соң', tag, 'Last; next'),
    createWord('Ожидающий', 'Күтүүдө', tag, 'Pending')
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
    createWord('Уронить', 'Түшүрүү', tag, 'Drop'),
    createWord('Мечтать', 'Кыялдануу', tag, 'To dream'),
    createWord('Держать', 'Кармоо, алуу, жетелөө', tag, 'Hold'),
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
    createWord('Сейчас', 'Азыр', tag, 'Now'),
    createWord('Тогда', 'Анда', tag, 'Then'),
    createWord('Завтра', 'Эртең', tag, 'Tomorrow'),
    createWord('Минута', 'Минута', tag, 'Minute'),
    createWord('Час', 'Саат', tag, 'Hour'),
    createWord('Месяц', 'Ай', tag, 'Month'),
    createWord('Год', 'Жыл', tag, 'Year'),
    createWord('Век', 'Кылым', tag, 'Century'),
    createWord('Ночь', 'Түн', tag, 'Night'),
    createWord('День', 'Күн', tag, 'Day'),
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
    createWord('Государство', 'Мамлекет', tag, 'State'),
    createWord('География', 'География', tag, 'Geography'),
    createWord('Турция', 'Түркия', tag, 'Turkey'),
    createWord('Россия', 'Орусия', tag, 'Russia'),
    createWord('Узбекистан', 'Өзбекстан', tag, 'Uzbekistan'),
    createWord('Казахстан', 'Казахстан', tag, 'Kazakhstan'),
    createWord('Япония', 'Жапония', tag, 'Japan'),
    createWord('Азербайджан', 'Азербайжан', tag, 'Azerbaijan'),
    createWord('Армения', 'Армения', tag, 'Armenia'),
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
    createWord('Зубец', 'Тиш', tag, 'Prong, cog'),
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
    createWord('Мир', 'Дүйнө', tag, 'World'),
    createWord('Море', 'Деңиз', tag, 'Sea'),
    createWord('Пустыня', 'Чөл', tag, 'Desert'),
    createWord('Река', 'Дарыя', tag, 'River'),
    createWord('Долина', 'Өрөөн', tag, 'Valley'),
    createWord('Столица', 'Борбор', tag, 'Capital'),
    createWord('Берег', 'Жээк', tag, 'Shore'),
    createWord('Пролив', 'Кысык', tag, 'Strait')
  ]
}

// Семья
const family = (tag: number): WordEntity[] => {
  return [
    createWord('Семья', 'Үй-бүлө', tag, 'Family'),
    createWord('Муж', 'Эр, күйөө', tag, 'Husband'),
    createWord('Жена', 'Аял, катын, зайып', tag, 'Wife'),
    createWord('Отец, папа', 'Ата', tag, 'Father'),
    createWord('Мать', 'Эне, апа', tag, 'Mother'),
    createWord('Брат', 'Тууган', tag, 'Brother'),
    createWord('Ребёнок', 'Бала', tag, 'Child'),
    createWord('Девушка', 'Кыз', tag, 'Young woman'),
    createWord('Девочка', 'Жаш кыз', tag, 'Girl'),
    createWord('Мальчик', 'Эркек бала', tag, 'Boy'),
    createWord('Мужчина', 'Эркек', tag, 'Man'),
    createWord('Женщина', 'Аял', tag, 'Woman'),
    createWord('Сын', 'Уул, бала', tag, 'Son'),
    createWord('Дочь', 'Кыз', tag, 'Daughter'),
    createWord('Сестра (старшая)', 'Эже', tag, 'Sister (elder)'),
    createWord('Сестра (младшая)', 'Сиңди', tag, 'Sister (younger)')
  ]
}

// Школа
const school = (tag: number): WordEntity[] => {
  return [
    createWord('Школа', 'Мектеп', tag, 'School'),
    createWord('Учитель', 'Мугалим', tag, 'Teacher'),
    createWord('Слово', 'Сөз', tag, 'Word'),
    createWord('Буква', 'Тамга', tag, 'Letter'),
    createWord('Словарь', 'Сөздүк', tag, 'Dictionary'),
    createWord('Книга', 'Китеп', tag, 'Book'),
    createWord('Оценка', 'Баа', tag, 'Grade'),
    createWord('Тетрадь', 'Дептер', tag, 'Notebook'),
    createWord('Дневник', 'Күндөлүк', tag, 'Diary'),
    createWord('Ручка', 'Калем', tag, 'Pen'),
    createWord('Карандаш', 'Карандаш', tag, 'Pencil'),
    createWord('Учёба', 'Окуу', tag, 'Study'),
    createWord('Корень (мат.)', 'Тамыр', tag, 'Root (math.)'),
    createWord('Знание, наука', 'Билим', tag, 'Knowledge, science'),
    createWord('Урок', 'Сабак', tag, 'Lesson')
  ]
}

// Местоимения
const pronouns = (tag: number): WordEntity[] => {
  return [
    createWord('Местоимение', 'Ат атооч', tag, 'Pronoun'),
    createWord('Он', 'Ал', tag, 'He'),
    createWord('Я', 'Мен', tag, 'I'),
    createWord('Она', 'Ал', tag, 'She'),
    createWord('Оно', 'Ал', tag, 'It'),
    createWord('Они', 'Алар', tag, 'They'),
    createWord('Себя', 'Өзүң', tag, 'Yourself'),
    createWord('Ты', 'Сен', tag, 'You'),
    createWord('Вы', 'Сиз', tag, 'You (formal/plural)'),
    createWord('Мы', 'Биз', tag, 'We'),
    createWord('Мой', 'Менин', tag, 'My'),
    createWord('Твой', 'Сенин', tag, 'Your'),
    createWord('Ваш', 'Сиздин', tag, 'Your (formal/plural)'),
    createWord('Их', 'Алардын', tag, 'Their'),
    createWord('Кто', 'Ким', tag, 'Who'),
    createWord('Что', 'Эмне', tag, 'What'),
    createWord('Где', 'Кайда', tag, 'Where'),
    createWord('Когда', 'Качан', tag, 'When'),
    createWord('Какой', 'Кандай', tag, 'Which'),
    createWord('Сколько', 'Канча', tag, 'How many')
  ]
}

// Напитки
const drinks = (tag: number): WordEntity[] => {
  return [
    createWord('Напиток', 'Суусундук, ич', tag, 'Drink'),
    createWord('Вода', 'Суу', tag, 'Water'),
    createWord('Молоко', 'Сүт', tag, 'Milk'),
    createWord('Пиво', 'Сыра', tag, 'Beer'),
    createWord('Водка', 'Арак', tag, 'Vodka'),
    createWord('Чай', 'Чай', tag, 'Tea'),
    createWord('Мёд', 'Бал', tag, 'Honey'),
    createWord('Сок', 'Шире', tag, 'Juice'),
    createWord('Кофе', 'Кофе', tag, 'Coffee'),
    createWord('Лимонад', 'Лимонад', tag, 'Lemonade'),
    createWord('Какао', 'Какао', tag, 'Cocoa'),
    createWord('Газировка', 'Газдалган суу', tag, 'Soda'),
    createWord('Минеральная вода', 'Минералдуу суу', tag, 'Mineral water'),
    createWord('Коктейль', 'Коктейль', tag, 'Cocktail'),
    createWord('Энергетик', 'Энергетик', tag, 'Energy drink'),
    createWord('Компот', 'Компот', tag, 'Compote'),
    createWord('Кефир', 'Кефир', tag, 'Kefir'),
    createWord('Йогурт', 'Йогурт', tag, 'Yogurt drink'),
    createWord('Морс', 'Морс', tag, 'Berry drink'),
    createWord('Холодный чай', 'Муздак чай', tag, 'Ice tea'),
    createWord('Горячий шоколад', 'Ысык шоколад', tag, 'Hot chocolate'),
    createWord('Бутылка', 'Бөтөлкө', tag, 'Bottle')
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
  ...geography(26),
  ...family(27),
  ...school(28),
  ...pronouns(29),
  ...drinks(30)
]

export { TAGS, WORDS }