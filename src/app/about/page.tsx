/**
 * Компонент страницы о программе.
 *
 * @author Markitanov Vadim
 * @since 10.01.2025
 */
import { JSX } from 'react'

const VERSION = '1.0.4'

const Page = (): JSX.Element => {
  return (
    <div className={'flex flex-col'}>
      <AboutItem name={'Автор'} value={'vadmark'}/>
      <AboutItem name={'Версия'} value={VERSION}/>
    </div>
  )
}

interface AboutItemProps {
  name: string
  value: string
}

const AboutItem = ({ name, value }: AboutItemProps): JSX.Element => {
  return (
    <span><b>{name}:</b><span className={'ml-2'}>{value}</span></span>
  )
}

export default Page