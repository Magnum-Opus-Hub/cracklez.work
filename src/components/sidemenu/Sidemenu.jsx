import Nav from '../nav/Nav'
import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import style from './Sidemenu.module.scss'
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from 'react';

const Sidemenu = () => {
    const {isMobile} = useIsMobile();

    const [burger, setBurger] = useState(false)
    const displayBurger = () => {
        console.log('ceva display',burger)
        setBurger(true)
    }

    const hideBurger = () =>{
        console.log('ceva hide',burger)
        setBurger(false)
    }


    return (

        isMobile ?
                <div className={style.navContainerMobile}>
                    <div className={style.logo}  >
                    <Link href="/">
                    <img
                    src={`/images/logo.svg`}
                    alt='cracklez logo'
                    />
                    </Link>
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
                        <Nav burger={val => setBurger(val)} ></Nav>
                        <div className={style.copy}>
                        <div className={style.logo}  >
                    <Link href="/">
                    <img
                    src={`/images/logo.svg`}
                    alt='cracklez logo'
                    />
                    </Link>
                    </div>
                        <div>© 2023 Cracklez Studio</div>
                        </div>
                        <button onClick={hideBurger}><img
                        src={`/images/menuhide.svg`}
                        alt='cracklez logo'
                        /></button>
                      </div>
                }
                </div>
             :
            <div className={isMobile ? style.containerMobile : style.container}>
                <div className={style.titleContainer}>
                    <div className={style.title}><Link href="/">cracklez</Link></div>
                    <img
          src={`/images/logo.svg`}
          layout="responsive"
          width={35}
          height={35}
          alt='cracklez logo'
        />
                </div>

                <div className={style.navContainer}><Nav page={undefined}/></div>
            </div>


    );
};

export default dynamic(() => Promise.resolve(Sidemenu), {
    ssr: true,
});
