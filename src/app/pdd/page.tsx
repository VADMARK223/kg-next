/**
 * Компонент пока тестовый.
 *
 * @author Markitanov Vadim
 * @since 19.01.2025
 */

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export default async function PddPage () {
  const deviceType = await getData()
  return (
    <h1>
      Девайс: {deviceType}
    </h1>
  )
}

async function getData () {
  const userAgent = (await headers()).get('user-agent')
  const parser = UAParser(userAgent ?? '')
  return parser.device.type || 'desktop'
}