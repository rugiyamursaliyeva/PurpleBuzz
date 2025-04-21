import React from 'react'
import styles from './Section2.module.css'
import { FiGift } from "react-icons/fi";


const Section2 = () => {
  return (
    <section className={styles.servise}>
        <div className={styles.ser}>
            <p>Services</p>
        </div>
        <div className={styles.makes}>
        <div className={styles.make}>
        <FiGift className={styles.gif}/>
        <p className={styles.for}>Make Success for future</p>
        </div>
        <div className={styles.use}>
            <p>You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template 
            collection websites. It is too easy to illegally copy and repost this template.</p>
        </div>
        </div>
    </section>
  )
}

export default Section2