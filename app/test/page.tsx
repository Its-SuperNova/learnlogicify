import React from 'react'
import styles from "./styles.module.css"
const Test = () => {
  return (
    <div className={styles.container}>
        <div className={styles.tabsContainer}>
            <div className={styles.tabs}>All Courses</div>
            <div className={styles.tabs}>All Bootcamps</div>
            <div className={styles.tabs}></div>
        </div>
    </div>
  )
}

export default Test
