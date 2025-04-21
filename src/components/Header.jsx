import React from 'react'
import styles from './Header.module.css'
import { FaRegBuilding } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router';


const Header = () => {
  return (
    <>
    <section className={styles.header}>
        <div className={styles.head}>
        <div className={styles.purple}>
        <FaRegBuilding className={styles.bn}/>
        <p className={styles.purp}>Purple</p>
        <p className={styles.buz}>Buzz</p>
        <FaBars className={styles.bars}/>
        </div>
        <div className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.icon}>
            <FaRegBell />
            <FaCog />
            <FaRegCircleUser />
        </div>
        </div>
    </section>
    </>
  )
}

export default Header