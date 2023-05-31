import React, { useRef } from 'react';
import styles from './Contact.module.scss';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_vz5tdte',
        'template_8tzwnph',
        form.current,
        'ac0xJlPiNP_GbytEe'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const { isMobile } = useIsMobile();

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.layout}>
        <div className={isMobile ? styles.containerMobile : styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Let's work together!</div>
            <div className={styles.email}>crcklzo@gmail.com</div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
            required
              className={styles.input}
              placeholder="subject"
              type="text"
              name="subject"
            />

            <input
            required
              className={styles.input}
              placeholder="email"
              type="email"
              name="user_email"
            />

            <input
            required
              className={styles.input}
              placeholder="budget"
              type="text"
              name="budget"
            />

            <textarea
            required
              name="message"
              placeholder="Write me a brief description of what are you looking"
            />

            <input className={styles.buttonStyle} type="submit" value="Send" />
          </form>
          <div className={styles.title}>Clients</div>
          <div className={styles.clients}>
            <div>Behance</div>
            <div>Instagram</div>
            <div>Twitter</div>
            <div>Behance</div>
            <div>Instagram</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>© 2023 Cracklez Studio</div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
});
