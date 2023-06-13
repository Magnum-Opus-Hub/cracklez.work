import Nav from '../nav/Nav'
import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import style from './Sidemenu.module.scss'
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';

const Sidemenu = () => {
    const {isMobile} = useIsMobile();
    const [burger, setBurger] = useState(false)
    const displayBurger = () => {
        setBurger(true)
    }

    const hideBurger = () =>{
        setBurger(false)
    }


    return (

        isMobile ?
                <div className={style.navContainerMobile}>
                    <div className={style.logo}>
                    <Image
                    src={`/images/logo.svg`}
                    layout="responsive"
                    width={1}
                    height={1}
                    alt='cracklez logo'
                    ></Image>
                    </div>
                {
                    !burger 

                    ? 
                    <div className={style.burgerShow}>
                        <button onClick={displayBurger}>
                        <img
                        src={`/images/menushow.svg`}
                        alt='cracklez logo'
                        ></img>
                        </button>
                    </div> 
                    
                    : <div className={style.burgerHide}>
                        <Nav></Nav>
                        <button onClick={hideBurger}><img
                        src={`/images/menuhide.svg`}

                        alt='cracklez logo'
                        ></img></button>
                      </div>
                }
                </div>
             :
            <div className={isMobile ? style.containerMobile : style.container}>
                <div className={style.titleContainer}>
                    <div className={style.title}><Link href="/">cracklez</Link></div>
                    <Image
          src={`/images/logo.svg`}
          layout="responsive"
          width={35}
          height={35}
          alt='cracklez logo'
        ></Image>
                </div>

                <div className={style.navContainer}><Nav page={undefined}/></div>
            </div>


    );
};

export default dynamic(() => Promise.resolve(Sidemenu), {
    ssr: true,
});
