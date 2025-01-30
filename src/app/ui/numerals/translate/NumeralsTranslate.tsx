/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.01.2025
 */
import { JSX, useEffect, useState } from 'react'
import KgNumeralsTranslate from '@/app/ui/numerals/translate/KgNumeralsTranslate'
import EnNumeralsTranslate from '@/app/ui/numerals/translate/EnNumeralsTranslate'
import { generateRandomInteger } from '@/app/lib/mathUtils'

const MAX_TARGET_VALUE: number = 9999

interface NumeralsTranslateProps {
  kgMode: boolean;
}

const NumeralsTranslate = ({kgMode}:NumeralsTranslateProps): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(0)

  useEffect(() => {
    setTargetNumber(generateRandomInteger(MAX_TARGET_VALUE))
  }, [])

  return (
    <div>
      <h1 className={'text-lg font-bold text-center'}>Интерактивный перевод числа</h1>
      {kgMode
        ? <KgNumeralsTranslate targetNumber={targetNumber} setTargetNumber={setTargetNumber}/>
        : <EnNumeralsTranslate targetNumber={targetNumber} setTargetNumber={setTargetNumber}/>}
    </div>
  )
}

export default NumeralsTranslate