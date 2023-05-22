import React, {useRef} from 'react';
import styles from './Contact.module.scss';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const Contact = () => {
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm(
                'service_fux1h8p',
                'template_dzj6pqs',
                form.current,
                '4nqpHZiOIUEJVJiYb'
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
    };

    const {isMobile} = useIsMobile();

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.layout}>
                <div className={isMobile ? styles.containerMobile : styles.container}>
                    <div className={styles.titleContainer}>
                        <div className= {styles.title} >Let`s work together!</div>
                        <div className={styles.email}>crcklzo@gmail.com</div>
                    </div>
                        <form ref={form} onSubmit={sendEmail}>
        
                                <input
                                    className={styles.input}
                                    placeholder="name"
                                    type="text"
                                    name="user_name"
                                />
                            
                           
                                <input
                                    className={styles.input}
                                    placeholder="email"
                                    type="email"
                                    name="user_email"
                                />
                            
                         
                                <textarea name="message" placeholder="message"/>
                           
                                <input
                                    className={styles.buttonStyle}
                                    type="submit"
                                    value="Send"
                                />
                            
                        </form>
                        <div className= {styles.title} >Clients</div>
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
