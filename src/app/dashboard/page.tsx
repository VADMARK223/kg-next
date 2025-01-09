/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import { fetchCustomers, fetchRevenues } from '@/app/lib/data'
import RevenueChart from '@/app/ui/dashboard/RevenueChart'
import CustomerChart from '@/app/ui/dashboard/CustomerChart'

const Page = async (): Promise<JSX.Element> => {
  // const revenue = await fetchRevenues()
  // const customers = await fetchCustomers()

  const data = await Promise.all([
    fetchRevenues(),
    fetchCustomers()
  ])

  return (
    <main>
      <h1>
        Dashboard
      </h1>
      <div>
        <RevenueChart revenue={data[0]}/>
      </div>
      <div>
        <CustomerChart customers={data[1]}/>
      </div>
    </main>
  )
}

export default Page