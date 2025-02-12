/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 12.02.2025
 */
'use client'
import { JSX } from 'react'
import { Button, Space } from 'antd'
// import '@ant-design/v5-patch-for-react-19'

const PddTest = (): JSX.Element => {
  return (
    <Space direction="vertical">
      <span>В разработке1...</span>
      <span>В разработке12...</span>
      <Button type={'primary'}>asd</Button>
    </Space>

  )
}

export default PddTest