"use client";

import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import ProductCard from "./components/productCard/productCard";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Categories from "./components/category/categories";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res?.data);
      setData(res?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      <Categories />
      <div className={styles.contentDetail}>
        <div className={styles.leftBox}>
          <p>Bags</p>
          <div className={styles.dot}></div>
          <p>Bagpacks</p>
        </div>
        <div className={styles.rightBox}>
          <p>13 products</p>
          <Image
            src="/images/Vector 4.png"
            width={24}
            height={24}
            alt="nav icon"
          />
        </div>
      </div>
      <div className={styles.productCard}>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
