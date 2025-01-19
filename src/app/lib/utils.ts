/**
 * Утилитарные константы и методы.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
export const APP_VERSION = '2.2.445'
export const isDevMode = (): boolean => process.env.NODE_ENV === 'development'
export const enum LANGUAGE_MODE {
  KG = 'kg',
  EN = 'en'
}