import React from "react";
import style from "./blog.module.css";
import Image from "next/image";
import imgtest from "@/public/websites.jpg"
import Link from "next/link";
const Blog = () => {
  return (
      <div className={style.maincontainer}> 
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image className={style.img} src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      <Link href="/blog/1" className={style.container}>
        
          <div className={style.imgcontainer}>
           
            <Image src={imgtest} width={400} height={250} />
           
          </div>
          <div className={style.textsection}>
            <h1 className={style.title}>title</h1>
            <p className={style.desc}>description</p>
            
          </div>
       
        </Link>
      </div>
  )
 
};

export default Blog;
