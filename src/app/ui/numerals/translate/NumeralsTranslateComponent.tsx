/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.01.2025
 */
import { JSX } from 'react'
import ValueViewer from '@/app/ui/common/ValueViewer'

interface NumeralsTranslateComponentProps {
  targetNumber: number,
  setTargetNumber: (newNumber: number) => void,
  rightAnswer: string
}

const NumeralsTranslateComponent = ({
                                      targetNumber,
                                      setTargetNumber,
                                      rightAnswer
                                    }: NumeralsTranslateComponentProps): JSX.Element => {
  return (
    <div>
      <div className={'flex flex-wrap gap-3 items-center'}>
        <span>Введите число:</span>
        <input type={'text'}
               className={'input input-primary max-w-[60px]'}
               value={targetNumber.toString()}
               maxLength={4}
               onChange={(event) => {
                 const value = event.target.value.replace(/\D/g, '')
                 setTargetNumber(Number(value))
               }}
        />
        <ValueViewer name={'Перевод'} value={rightAnswer}/>
      </div>
    </div>
  )
}

export default NumeralsTranslateComponent