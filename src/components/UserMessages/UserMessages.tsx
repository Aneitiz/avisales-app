import React from 'react'
import { Spin, Alert } from 'antd'

import style from './UserMessages.module.scss'
export const LoadingSpinner = () => {
  return (
    <div className={style.spinner}>
      <Spin size="large" />
    </div>
  )
}

export const ErrorNotification = () => {
  return (
    <div>
      <Alert
        message="Что то явно пошло не так"
        description="Попробуйте перезагрузить страницу, сервер прилег отдохнуть, но мы скоро это исправим!"
        type="warning"
        showIcon
      />
    </div>
  )
}

export const NoTicketsFounded = () => {
  return (
    <div>
      <Alert
        message="Не удалось найти билеты"
        description="Попробуйте подобрать что нибудь другое, у вас обязательно получится!"
        type="warning"
        showIcon
      />
    </div>
  )
}
