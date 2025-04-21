import React from 'react'
import styles from './Footer.module.css'
import { FaRegBuilding, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaMediumM } from "react-icons/fa";
import { RiFlickrFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.foot}>
        <div className={styles.prp}>
          <FaRegBuilding className={styles.bnn} />
          <p className={styles.brand}>Purple Buzz</p>
        </div>
        <div className={styles.lorem}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
        </div>
        <div className={styles.icons}>
          <FaFacebookF aria-label="Facebook" />
          <FaLinkedinIn aria-label="LinkedIn" />
          <FaWhatsapp aria-label="WhatsApp" />
          <RiFlickrFill aria-label="Flickr" />
          <FaMediumM aria-label="Medium" />
        </div>
      </div>

      <div className={styles.comp}>
        <p className={styles.title}>Our Works</p>
        <ul className={styles.hms}>
          <li>&gt; Home</li>
          <li>&gt; About Us</li>
          <li>&gt; Work</li>
          <li>&gt; Price</li>
          <li>&gt; Contact</li>
        </ul>
      </div>

      <div className={styles.comps}>
        <p className={styles.title}>Our Company</p>
        <ul className={styles.hmt}>
          <li>&gt; Branding</li>
          <li>&gt; Business</li>
          <li>&gt; Marketing</li>
          <li>&gt; Social Media</li>
          <li>&gt; Digital Solution</li>
          <li>&gt; Graphic</li>
        </ul>
      </div>

      <div className={styles.for}>
        <p className={styles.title}>For Client</p>
        <div className={styles.phone}><FaPhone /><span>010-020-0340</span></div>
        <div className={styles.email}><AiOutlineMail /><span>info@company.com</span></div>
      </div>
    </footer>
    <footer className={styles.foo}>
        <div className={styles.crip}>
            <p>© Copyright 2021 Purple Buzz Company. All Rights Reserved.</p>
        </div>
        <div className={styles.by}>
             <p>Designed by TemplateMo</p>
             <p>Distributed by Themewagon</p>
        </div>
    
            

    </footer>
    </>
  )
}

export default Footer
