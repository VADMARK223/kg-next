import { createEvent, createStore } from 'effector'

/**
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
export interface Filters {
  selectedTag: number
  wordsFilteredCount: number
}

const defaultFilters: Filters = {
  selectedTag: 0,
  wordsFilteredCount: 0
}

export const selectedTagUpdated = createEvent<number>('Событие изменения выбранного тега.')
export const wordsFilteredCountUpdated = createEvent<number>('Событие изменения кол-во отфильтрованных слов.')
export const $filters = createStore<Filters>(defaultFilters)
$filters.on(selectedTagUpdated, (state, payload) => {
  return { ...state, selectedTag: payload }
})
$filters.on(wordsFilteredCountUpdated, (state, payload) => {
  return { ...state, wordsFilteredCount: payload }
})
