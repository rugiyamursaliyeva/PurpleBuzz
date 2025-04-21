import React from 'react';
import styles from './Section9.module.css'
import { BiNews } from "react-icons/bi";
import { MdOutlineLaptop } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const Section9 = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
        .min(2, "Your name is revenge.")
        .required("Register your name"),
        email: Yup.string()
        .email()
        .required("Register your email"),
      });
    
      const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          companyName: "",
          subject: "",
          message: "",
        },
        validationSchema,
        onSubmit: (values) => {
          axios.post("https://northwind.vercel.app/api/categories", values);
          formik.resetForm();
        },
      });
  return (
    <>
    <section className={styles.format}>
    <section className={styles.secon}>
        <div className={styles.doe}>
            <div className={styles.medias}>
                <div className={styles.newsbn}>
                <BiNews />
                </div>
                <div className={styles.media}>
                    <p className={styles.med}>Media Contact</p>
                    <div className={styles.dow}>
                        <p>Mr. John Doe</p>
                        <p>010-020-0340</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.medias}>
                <div className={styles.newsbn}>
                <MdOutlineLaptop />
                </div>
                <div className={styles.media}>
                    <p className={styles.med}>Technical Contact</p>
                    <div className={styles.dow}>
                        <p>Mr. John Stiles</p>
                        <p>010-020-0340</p>
                    </div>
                </div>
            </div>
            <div className={styles.medias}>
                <div className={styles.newsbn}>
                <PiMoneyFill />
                </div>
                <div className={styles.media}>
                    <p className={styles.med}>Billing Contact</p>
                    <div className={styles.dow}>
                        <p>Mr. Richard Miles</p>
                        <p>010-020-0340</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <form
      onSubmit={formik.handleSubmit}
      className={styles.formContainer}
    >
      <div className={styles.forms}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          {...formik.getFieldProps("name")}
          className={styles.inputs}
        />
        {
            formik.touched.name && formik.errors.name && (
                <div className={styles.error}>{formik.errors.name}</div>
            )
        }
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={styles.inputs}
        />
        {
            formik.touched.email && formik.errors.email && (
                <div className={styles.error}>{formik.errors.email}</div>

            )
        }
      </div>
    
      <div className={styles.forms}>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Phone"
          {...formik.getFieldProps("phone")}
          className={styles.inputs}
        />
        <input
          id="companyName"
          name="companyName"
          type="text"
          placeholder="Company Name"
          {...formik.getFieldProps("companyName")}
          className={styles.inputs}
        />
      </div>
    
      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="Subject"
        {...formik.getFieldProps("subject")}
        className={styles.inputs}
      />
    
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        rows={6}
        {...formik.getFieldProps("message")}
        className={styles.inputs}
      />
    
      <div className={styles.submit}>
        <button
          className={styles.submitbts}
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
    </section>
        
        </>
      );
    };
    
export default Section9;