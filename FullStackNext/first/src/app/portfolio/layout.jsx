import React from 'react'
import style from "@/app/portfolio/portfolio.module.css"
const layout = ({children}) => {
  return (
    <div>
      <h1 className={style.title}>Our Works</h1>
      {children}
    </div>
  )
}

export default layout
