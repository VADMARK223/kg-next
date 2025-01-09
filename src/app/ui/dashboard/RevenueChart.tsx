/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import { fetchRevenues } from '@/app/lib/data'

const RevenueChart = async (): Promise<JSX.Element> => {
  const revenue = await fetchRevenues()
  return (
    <div>
      <span>Revenue: {revenue.length}</span>
    </div>
  )
}

export default RevenueChart