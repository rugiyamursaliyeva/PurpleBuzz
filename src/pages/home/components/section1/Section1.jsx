import React from 'react'
import styles from './Section1.module.css'

const Section1 = () => {
  return (
    <section className={styles.lana}>
        <div className={styles.shop}>
            <p className={styles.non}>Cupidatat non proident, sunt in culpa qui officia</p>
            <p className={styles.null}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
            <button className={styles.get}>Get Started</button>
        </div>

    </section>
  )
}

export default Section1