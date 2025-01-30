/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import NumeralsTranslateComponent from '@/app/ui/numerals/translate/NumeralsTranslateComponent'

const numberToWords = (value: number): string | null => {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (value < 10) return ones[value]
  if (value > 10 && value < 20) return teens[value - 11]
  if (value % 10 === 0 && value < 100) return tens[value / 10 - 1]
  if (value < 100) return `${tens[Math.floor(value / 10) - 1]}-${ones[value % 10]}`
  if (value < 1000) return `${ones[Math.floor(value / 100)]} hundred${value % 100 !== 0 ? ' ' + numberToWords(value % 100) : ''}`
  if (value < 10000) return `${ones[Math.floor(value / 1000)]} thousand${value % 1000 !== 0 ? ' ' + numberToWords(value % 1000) : ''}`
  return null
}

interface EnNumeralsTranslateProps {
  targetNumber: number,
  setTargetNumber: (newNumber: number) => void
}

const EnNumeralsTranslate = ({ targetNumber, setTargetNumber }: EnNumeralsTranslateProps): JSX.Element => {
  const [rightAnswer, setRightAnswer] = useState<string>('-')

  useEffect(() => {
    setRightAnswer(numberToWords(targetNumber)?.replace(/^./, match => match.toUpperCase()) + '.' || '-')
  }, [targetNumber])

  return (
    <NumeralsTranslateComponent targetNumber={targetNumber} setTargetNumber={setTargetNumber}
                                rightAnswer={rightAnswer}/>
  )
}

export default EnNumeralsTranslate