/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import { fetchCustomers } from '@/app/lib/data'
import RevenueChart from '@/app/ui/dashboard/RevenueChart'
import CustomerChart from '@/app/ui/dashboard/CustomerChart'
import {Suspense} from 'react'
import {RevenueChartSkeleton} from '@/app/ui/skeletons'

const Page = async (): Promise<JSX.Element> => {
  //
  const customers = await fetchCustomers()

  // const data = await Promise.all([
  //   fetchRevenues(),
  //   fetchCustomers()
  // ])

  return (
    <main>
      <h1>
        Dashboard
      </h1>
      <div>
        {/*<CustomerChart customers={data[1]}/>*/}
        <CustomerChart customers={customers}/>
      </div>
      <div>
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
      </div>
    </main>
  )
}

export default Page