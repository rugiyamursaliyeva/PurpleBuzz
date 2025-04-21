import React from 'react'
import styles from './Section6.module.css'
import Images1 from '../../../../media/recent-work-01.jpg'
import Images2 from '../../../../media/recent-work-02.jpg'
import Images3 from '../../../../media/recent-work-03.jpg'
import Images4 from '../../../../media/recent-work-04.jpg'
import Images5 from '../../../../media/recent-work-05.jpg'
import Images6 from '../../../../media/recent-work-06.jpg'

const Section6 = () => {
  return (
    <>
    <div className={styles.work}>
        <p>Recent Works</p>
    </div>
    <section className={styles.containers}>
        <div className={styles.cardGrids}>
          <div className={styles.cards}>
            <img src={Images1} alt="Social Media" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>Social Media</h3>
              </div>
              <div className={styles.texts}>
                <p>Ullamco laboris nisi ut aliquip ex</p>
              </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <img src={Images2} alt="Web Marketing" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>Web Marketing</h3>
              </div>
              <div className={styles.texts}>
                <p>Psum officia anim id est laborum.</p>
              </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <img src={Images3} alt="R & D" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>R & D</h3>
              </div>
              <div className={styles.texts}>
                <p>Sum dolor sit consencutur</p>
              </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <img src={Images4} alt="Public Relation" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>Public Relation</h3>
              </div>
              <div className={styles.texts}>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <img src={Images5} alt="Branding" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>Branding</h3>
              </div>
              <div className={styles.texts}>
                <p>Put enim ad minim veniam</p>
              </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <img src={Images6} alt="Creative Design" className={styles.image} />
            <div className={styles.overlays}>
            <div className={styles.ullo}>
              <div className={styles.categorys}>
                <h3>Creative Design</h3>
              </div>
              <div className={styles.texts}>
                <p>Mollit anim id est laborum.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </>
  )
}

export default Section6