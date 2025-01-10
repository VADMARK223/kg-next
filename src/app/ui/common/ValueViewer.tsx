/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { JSX } from 'react'

interface ValueViewerProps {
  name: string
  value: string | number | JSX.Element
}

const ValueViewer = ({ name, value }: ValueViewerProps): JSX.Element => {
  return <span className={'flex items-center'}><b>{name}:</b><span className={'ml-2'}>{value}</span></span>
}

export default ValueViewer