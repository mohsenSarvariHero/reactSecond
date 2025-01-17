import React from 'react'
import style from"./portfolio.module.css"
import Image from 'next/image'
import imgfirst from "@/public/apps.jpg"
import imgsecond from "@/public/illustration.png"
import imgthird from "@/public/websites.jpg"
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div  className={style.container}>
      
      <br />
      <h3 className={style.desc}>Choose a Gallary</h3>
      <br/>
      <div className={style.picture}>
        <div>
          <Link href='/portfolio/applications'><div className={style.imgcontainer}>
             <Image src = {imgfirst} width={250} height={350}  />  
             
          </div>
             <h1 className={style.caption}>Applications</h1>
             </Link>
          
        </div>
    
        <div>
          <Link href="/portfolio/illustrations" >
          <div className={style.imgcontainer}>
            <Image src = {imgsecond} width={250} height={350}  />
          </div>
          
          <h1 className={style.caption} >Illustrations</h1>
          </Link>
        </div>
    
        <div>
          <Link href="/portfolio/website">
          <div className={style.imgcontainer}>
            <Image src = {imgthird} width={250}  height={350}/>
          </div>
          
          <h1 className={style.caption}>WebSites</h1>
          </Link>
        </div>
    
      </div>
    </div>
  )
}

export default Portfolio
