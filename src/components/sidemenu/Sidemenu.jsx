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
                    <div className={style.logo}  >
                    <Link href="/">
                    <Image
                    src={`/images/logo.svg`}
                    layout="responsive"
                    width={30}
                    height={30}
                    alt='cracklez logo'
                    />
                    </Link>
                    </div>
                {
                    !burger

                    ?
                    <div className={style.burgerShow}>
                        <button onClick={displayBurger}>
                        <Image
                        src={`/images/menushow.svg`}
                        alt='cracklez logo'
                        width={25}
                        height={25}
                        ></Image>
                        </button>
                    </div>

                    : <div className={style.burgerHide}>
                        <Nav></Nav>
                        <button onClick={hideBurger}><Image
                        src={`/images/menuhide.svg`}
                        width={25}
                        height={25}
                        alt='cracklez logo'
                        /></button>
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
        />
                </div>

                <div className={style.navContainer}><Nav page={undefined}/></div>
            </div>


    );
};

export default dynamic(() => Promise.resolve(Sidemenu), {
    ssr: true,
});
