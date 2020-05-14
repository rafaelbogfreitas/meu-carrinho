import React from 'react'

import loadingStyles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={loadingStyles.skChase}>
      <div className={loadingStyles.skChaseDot}></div>
      <div className={loadingStyles.skChaseDot}></div>
      <div className={loadingStyles.skChaseDot}></div>
      <div className={loadingStyles.skChaseDot}></div>
      <div className={loadingStyles.skChaseDot}></div>
      <div className={loadingStyles.skChaseDot}></div>
    </div>
  )
}

export default Loading
