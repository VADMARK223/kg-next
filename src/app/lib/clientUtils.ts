/**
 * @author Markitanov Vadim
 * @since 29.01.2025
 */
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export async function isMobile () {
  const userAgent = (await headers()).get('user-agent')
  const parser = UAParser(userAgent ?? '')
  const deviceType =  parser.device.type || 'desktop'
  return deviceType === 'mobile'
}