import { createEvent, createStore } from 'effector'

/**
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
export interface Filters {
  selectedTag: number
}

const defaultFilters: Filters = {
  selectedTag: 0
}

export const selectedTagUpdated = createEvent<number>('Событие изменения выбранного тега.')
export const $filters = createStore<Filters>(defaultFilters)
$filters.on(selectedTagUpdated, (state, payload) => {
  return { ...state, selectedTag: payload }
})
