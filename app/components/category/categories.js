import Image from "next/image";
import React, { useState, useEffect } from "react";
import { data } from "./categoryData";
import styles from "./categoryData.module.css";

const Categories = () => {
  const [projectData, setProjectData] = useState([data]);

  useEffect(() => {
    setProjectData(data);
  }, []);

  return (
    <div className={styles.categoryContainer}>
      {projectData?.map((item, idx) => {
        return (
          <div className={styles.options} key={idx}>
            <Image
              className={styles.optImage}
              src={item?.src}
              loading='lazy'
              width={75}
              height={95}
              alt="nav icon"
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
