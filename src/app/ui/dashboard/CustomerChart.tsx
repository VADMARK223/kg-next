/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import { Customer } from '@/app/lib/definitions'

const CustomerChart = async ({ customers }: { customers: Customer[] }): Promise<JSX.Element> => {
  return (
    <div>
      Customers: {customers.length}
    </div>
  )
}

export default CustomerChart