import { createEvent, createStore } from 'effector'

/**
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
export interface Filters {
  selectedTag?: number
  wordsFilteredCount: number
  searchString: string,
  selectedTagMode: boolean
}

const defaultFilters: Filters = {
  selectedTag: undefined,
  wordsFilteredCount: 0,
  searchString: '',
  selectedTagMode: false,
}

export const selectedTagUpdated = createEvent<number|undefined>('Событие изменения выбранного тега.')
export const wordsFilteredCountUpdated = createEvent<number>('Событие изменения кол-во отфильтрованных слов.')
export const searchStringUpdated = createEvent<string>('Событие обновления строки поиска.')
export const selectedTagModeUpdated = createEvent<boolean>('Событие обновления режима выбора категории.')

export const $filters = createStore<Filters>(defaultFilters)
$filters.on(selectedTagUpdated, (state, payload) => {
  return { ...state, selectedTag: payload }
})
$filters.on(wordsFilteredCountUpdated, (state, payload) => {
  return { ...state, wordsFilteredCount: payload }
})
$filters.on(searchStringUpdated, (state, payload) => {
  return { ...state, searchString: payload }
})
$filters.on(selectedTagModeUpdated, (state, payload) => {
  return { ...state, selectedTagMode: payload }
})
