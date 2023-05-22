import Nav from '../nav/Nav'
import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import style from './Sidemenu.module.scss'
import dynamic from "next/dynamic";
import Link from "next/link";

const Sidemenu = () => {
    const {isMobile} = useIsMobile();

    return (

        isMobile ?
                <div className={style.navContainerMobile}>
                    <Nav page={undefined}/>
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
        ></img>
                </div>

                <div className={style.navContainer}><Nav page={undefined}/></div>
            </div>


    );
};

export default dynamic(() => Promise.resolve(Sidemenu), {
    ssr: false,
});
