/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import { Revenue } from '@/app/lib/definitions'

const RevenueChart = async ({ revenue }: { revenue: Revenue[] }): Promise<JSX.Element> => {
  return (
    <div>
      <span>Revenue: {revenue.length}</span>
    </div>
  )
}

export default RevenueChart