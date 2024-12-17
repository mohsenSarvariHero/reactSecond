import React from 'react'
import styles from "../[category]/category.module.css"
import Button from '@/components/Button/Button'
import first from "@/public/illustration.png"
import Image from 'next/image'
const PortfolioCategory = ({params}) => {
  console.log(params)
  return (
    <div>
        <h1 className={styles.title}>{params.category}</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.head}>Creative Portfolio</h1>
            <p className={styles.desc}>write the description of {params.category}</p>
            <Button text="see more" url="#" />
          </div>
          <div className={styles.right}>
            <Image src={first} width={500} height={500} alt="illustrative" />
          </div>
        </div>
    </div>
  )
}

export default PortfolioCategory
