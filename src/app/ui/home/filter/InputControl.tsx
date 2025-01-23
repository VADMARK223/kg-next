/**
 * Компонент поиска слов.
 *
 * @author Markitanov Vadim
 * @since 23.01.2025
 */
import { JSX } from 'react'
import { $searchString, searchStringUpdated } from '@/app/lib/effector/word'
import { useUnit } from 'effector-react'

const InputControl = (): JSX.Element => {
  const searchString = useUnit($searchString)

  const handleAddCharacter = (char: string) => {
    searchStringUpdated(searchString + char)
  }

  return (
    <label className="input w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin={'round'} strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search"
             className="grow"
             placeholder="Поиск"
             value={searchString}
             onChange={e => {
               searchStringUpdated(e.target.value)
             }}/>
      <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
           onClick={() => handleAddCharacter('ө')}>
        Ө
      </kbd>
      <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
           onClick={() => handleAddCharacter('ү')}>
        Ү
      </kbd>
      <kbd className="kbd kbd-lg cursor-pointer hover:bg-gray-500 transition-colors"
           onClick={() => handleAddCharacter('ң')}>
        Ң
      </kbd>
    </label>
  )
}

export default InputControl