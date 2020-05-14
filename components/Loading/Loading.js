import React from 'react'

import loadingStyles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={loadingStyles.sk-chase}>
      <div className={loadingStyles.sk-chase-dot}></div>
      <div className={loadingStyles.sk-chase-dot}></div>
      <div className={loadingStyles.sk-chase-dot}></div>
      <div className={loadingStyles.sk-chase-dot}></div>
      <div className={loadingStyles.sk-chase-dot}></div>
      <div className={loadingStyles.sk-chase-dot}></div>
    </div>
  )
}

export default Loading
