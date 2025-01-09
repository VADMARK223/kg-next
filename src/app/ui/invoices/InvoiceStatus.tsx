/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import { JSX } from 'react'
import clcx from 'clsx'

interface InvoiceStatusProps {
  status: string
}

const InvoiceStatus = ({ status }: InvoiceStatusProps): JSX.Element => {
  return (
    <span
      className={clcx(
        {
          'text-green-500 ': status === 'success',
          'text-red-500 ': status === 'error',
        }
      )}>
      {status}
    </span>
  )
}

export default InvoiceStatus