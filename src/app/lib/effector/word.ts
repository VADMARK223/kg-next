import { createEvent, createStore } from 'effector'
import { Word } from '@/app/lib/model/word'

/**
 * @author Markitanov Vadim
 * @since 11.01.2025
 */

export const wordsUpdated = createEvent<Word[]>('Событие обновления слов.')

export const $words = createStore<Word[]>([])
$words.on(wordsUpdated, (_state, payload) => payload)

export const searchStringUpdated = createEvent<string>('Событие обновления строки поиска.')
export const $searchString = createStore<string>('')
$searchString.on(searchStringUpdated, (_state, payload) => payload)