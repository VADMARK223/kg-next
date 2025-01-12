/**
 * Утилитарные константы и методы.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
export const APP_VERSION = '1.5.0'
export const IS_REMOTE_MODE = false
export const isDevMode = (): boolean => process.env.NODE_ENV === 'development'