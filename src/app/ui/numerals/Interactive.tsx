/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 29.01.2025
 */
'use client'
import { JSX, useEffect, useState } from 'react'
import { countDigitsInNumber, generateRandomInteger } from '@/app/lib/mathUtils'
import ValueViewer from '@/app/ui/common/ValueViewer'

const MAX_TARGET_VALUE: number = 9999

const convertNumberToString = (value: number): string | null => {
  if (value === 0) {
    return 'нөл'
  }
  if (value === 1) {
    return 'бир'
  }
  if (value === 2) {
    return 'эки'
  }
  if (value === 3) {
    return 'үч'
  }
  if (value === 4) {
    return 'төрт'
  }
  if (value === 5) {
    return 'беш'
  }
  if (value === 6) {
    return 'алты'
  }
  if (value === 7) {
    return 'жети'
  }
  if (value === 8) {
    return 'сегиз'
  }
  if (value === 9) {
    return 'тогуз'
  }
  if (value === 10) {
    return 'он'
  }
  if (value === 20) {
    return 'жыйырма'
  }
  if (value === 30) {
    return 'отуз'
  }
  if (value === 40) {
    return 'кырк'
  }
  if (value === 50) {
    return 'элүү'
  }
  if (value === 60) {
    return 'алтымыш'
  }
  if (value === 70) {
    return 'жетимиш'
  }
  if (value === 80) {
    return 'сексен'
  }
  if (value === 90) {
    return 'токсон'
  }
  return null
}

const convertNumberByCountDigits = (value: number): string | null => {
  if (value === 3) {
    return 'жүз'
  }
  if (value === 4) {
    return 'миң'
  }
  return null
}

const Interactive = (): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(0)
  const [rightAnswer, setRightAnswer] = useState<string>('-')

  useEffect(() => {
    setTargetNumber(generateRandomInteger(MAX_TARGET_VALUE))
  }, [])

  const deepConvert = (value: number): string | null => {
    if (convertNumberToString(value) != null) {
      return convertNumberToString(value)
    } else {
      const cntDigits = countDigitsInNumber(value)
      return `${convertNumberToString(value / Math.pow(10, cntDigits - 1)) as string} ${convertNumberByCountDigits(cntDigits) as string}`
    }
  }

  useEffect(() => {
    const cnt = countDigitsInNumber(targetNumber)
    const resultNumber = []
    let newTargetNumber = targetNumber
    for (let i = 0; i < cnt; i++) {
      const current = newTargetNumber % 10 * Math.pow(10, i)
      if (current !== 0 || cnt === 1) {
        resultNumber.push(current)
      }

      newTargetNumber = Math.floor(newTargetNumber / 10)
    }

    setRightAnswer(resultNumber
      .reverse()
      .map(value => deepConvert(value))
      .join(' ')
      .replace(/^./, match => match.toUpperCase()) + '.'
    )
  }, [targetNumber])

  return (
    <div>
      <h1 className={'text-lg font-bold text-center'}>Интерактивный перевод числа</h1>
      <div className={'flex flex-wrap gap-3 items-center'}>
        <span>Введите число:</span>
        <input type={'text'}
               className={'input input-primary max-w-[60px]'}
               value={targetNumber.toString()}
               maxLength={4}
               onChange={(event) => {
                 const value = event.target.value.replace(/\D/g, "")
                 setTargetNumber(Number(value))
               }}
               />
        <ValueViewer name={'Перевод'} value={rightAnswer}/>
      </div>
    </div>
  )
}

export default Interactive