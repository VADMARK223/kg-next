/**
 * Компонент пока тестовый.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */
import { isMobile } from '@/app/lib/clientUtils'

export default async function PddPage () {
  const isMobileValue = await isMobile()
  return (
    <h1>
      Девайс: {isMobileValue ? 'Мобильный':'Десктом'}
    </h1>
  )
}