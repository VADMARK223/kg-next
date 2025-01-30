/**
 * @author Markitanov Vadim
 * @since 29.01.2025
 */
export const generateRandomInteger = (max: number): number => Math.floor(Math.random() * max) + 1

/**
 * Количество цифр в числе.
 *
 * @param {number} value - число.
 * @returns {number} количество цифр
 */
export const countDigitsInNumber = (value: number): number => String(value).length