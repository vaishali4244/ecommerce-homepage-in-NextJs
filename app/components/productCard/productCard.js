"use client";
import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css'

const ProductCard = ({title,price, image}) => {
  return (
    <div className={styles.productBox}>
       
      <Image
            className={styles.bookmark}
            src="/images/blackmark.png" 
            alt="cart icon"
            loading="lazy"
            width={24}
            height={24} 
          />
        <Image className={styles.productImg} src={image} width={286} height={370} alt="product image" loading="lazy" quality={25}
       />
       
      <div className={styles.productDetails}>
        <p className={styles.productTitle}>{title} </p>
        <div className={styles.pricing}>
            <p >₹{price|0} <span className={styles.originalPrc}>{ (price*2)|0}</span><span className={styles.discount}> (50%)</span></p>
       
            <Image
            src="/images/Group.png" 
            alt="cart icon"
            width={24}
            height={24} 
            className={styles.cart}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
