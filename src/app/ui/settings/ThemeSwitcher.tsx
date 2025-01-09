/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
'use client'
import { JSX, useState } from 'react'
import { Select } from 'react-daisyui'

const { Option } = Select

enum LocalStoreKey {
  THEME = 'kg-next-theme',
}

const DEFAULT_THEME = 'dark'

const ThemeSwitcher = (): JSX.Element => {
  const [value, setValue] = useState(DEFAULT_THEME)

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem(LocalStoreKey.THEME)
  //   console.log('savedTheme:', savedTheme)
  //   if (savedTheme) {
  //     document.documentElement.setAttribute('data-theme', savedTheme)
  //   }
  // }, [])

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem(LocalStoreKey.THEME)
  //   if (savedTheme) {
  //     setValue(savedTheme)
  //     document.documentElement.setAttribute('data-theme', savedTheme)
  //   } else {
  //     document.documentElement.setAttribute('data-theme', value)
  //   }
  // }, [value])

  return (
    <div>
      <Select className={'flex p-4'}
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                localStorage.setItem(LocalStoreKey.THEME, e.target.value)
              }}>
        <Option value={'dark'}>Dark</Option>
        <Option value={'cupcake'}>Cupcake</Option>
        <Option value={'light'}>Light</Option>
      </Select>
    </div>
  )
}

export default ThemeSwitcher