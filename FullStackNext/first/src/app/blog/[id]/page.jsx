import React from "react";
import styles from "../[id]/page.module.css";
import Image from "next/image";
import firstimg from "@/public/websites.jpg"
const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1>{params.id}</h1>
      <div className={styles.header}>
        <div className={styles.headerleft}>
          <h1 className={styles.headingleft}>title</h1>
          <p className={styles.descleft}>descriptions</p>
          <div>
            <Image />
            <p>Mohsen</p>
          </div>
        </div>
        <div className={styles.headerright}>
          <Image src={firstimg} width={400} height={300} />
        </div>

      </div>
      <div className={styles.lower}>
          <div> descriptions1 </div>
          <div> description 2</div>
          <div> description 3</div>
        </div>
    </div>
  );
};

export default BlogPost;

