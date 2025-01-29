/**
 * @author Markitanov Vadim
 * @since 24.01.2025
 */
import { createEvent, createStore } from 'effector'

export interface Settings {
  answerCount: number,
  questionCount: number
  isMobile: boolean | null
}

const defaultSettings: Settings = {
  answerCount: 5,
  questionCount: 5,
  isMobile: null
}
export const answerCountUpdated = createEvent<number>('Событие изменения кол-ва ответов в вопросе.')
export const questionCountUpdated = createEvent<number>('Событие изменения кол-ва вопросов в опроснике.')
export const isMobileUpdated = createEvent<boolean>('Событие обновления режима.')

export const $settings = createStore<Settings>(defaultSettings)
$settings.on(answerCountUpdated, (state, payload) => {
  return { ...state, answerCount: payload }
})
$settings.on(questionCountUpdated, (state, payload) => {
  return { ...state, questionCount: payload }
})
$settings.on(isMobileUpdated, (state, payload) => {
  return { ...state, isMobile: payload }
})