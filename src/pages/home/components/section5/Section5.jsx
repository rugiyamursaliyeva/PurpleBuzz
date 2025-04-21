import React from 'react'
import styles from './Section5.module.css'
import { FaBoxArchive } from "react-icons/fa6";


const Section5 = () => {
  return (
    <section className={styles.gav}>
    <div className={styles.gavi}>
        <div className={styles.box}>
        <FaBoxArchive />
        </div>
        <div className={styles.suc}>
            <p className={styles.great}>Great transformations successful</p>
            <p className={styles.quis}>Quis ipsum suspendisse ultrices gravida.</p>
        </div>
            <button className={styles.view}>View Our Work</button>
    </div>
    </section>
  )
}

export default Section5