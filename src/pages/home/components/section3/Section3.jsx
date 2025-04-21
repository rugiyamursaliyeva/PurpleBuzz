import React from 'react'
import styles from './Section3.module.css'

const Section3 = () => {
  return (
    <section className={styles.ha}>
        <div className={styles.navs}>
            <a href="#" className={styles.all}>All</a>
            <a href="#">Graphics</a>
            <a href="#">UI/UX</a>
            <a href="#">Branding</a>
        </div>
    </section>
  )
}

export default Section3