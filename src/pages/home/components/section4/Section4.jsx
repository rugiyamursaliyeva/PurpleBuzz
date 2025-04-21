import React from 'react'
import styles from './Section4.module.css'
import Image1 from '../../../../media/services-01.jpg'
import Image2 from '../../../../media/services-02.jpg'
import Image3 from '../../../../media/services-03.jpg'
import Image4 from '../../../../media/services-04.jpg'
import Image5 from '../../../../media/services-05.jpg'
import Image6 from '../../../../media/services-06.jpg'
import Image7 from '../../../../media/services-07.jpg'
import Image8 from '../../../../media/services-08.jpg'


const Section4 = () => {
  return (
    <section className={styles.container}>
    <div className={styles.cardGrid}>
      <div className={styles.card}>
        <img src={Image1} alt="UI/UX Design" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>UI/UX Design</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image2} alt="Social Media" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Social Media</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image3} alt="Marketing" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Marketing</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image4} alt="Graphic" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Graphic</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image5} alt="Digital Marketing" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Digital Marketing</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image6} alt="Market Research" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Market Research</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image7} alt="Business" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Business</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <img src={Image8} alt="Branding" className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.category}>
            <button>Branding</button>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section4