/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import React, { JSX } from 'react'
import SideNav from '@/app/ui/dashboard/SideNav'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <SideNav/>
      <div>{children}</div>
    </div>
  )
}

export default Layout