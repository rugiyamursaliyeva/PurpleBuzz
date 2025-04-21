import React from 'react'
import styles from './Section7.module.css'
import Image9 from '../../../../media/banner-img-01.svg'

const Section7 = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.contc}>
            <div className={styles.cont}>
                <p className={styles.tac}>Contact</p>
                <p className={styles.elit}>Elit, sed do eiusmod tempor</p>
                <p className={styles.vector}>Vector illustration is from <a href="#">StorySet</a>. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className={styles.wild}>
                <img src={Image9} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section7