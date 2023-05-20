import Nav from '../nav/Nav'
import React, {useState} from "react";
import useIsMobile from "../../hooks/useIsMobile";
import style from './Sidemenu.module.scss'
import dynamic from "next/dynamic";
import Link from "next/link";


const banner = "Latest Work -> Latest Work -> "

const Sidemenu = () => {
    const {isMobile} = useIsMobile();

    return (

        isMobile ?
                <div className={style.navContainerMobile}>
                    <Nav page={undefined}/>
                </div>
             :
            <div className={isMobile ? style.containerMobile : style.container}>
                <div>
                    <div className={style.title}><Link href="/">Cracklez</Link></div>
                </div>

                <div className={style.navContainer}><Nav page={undefined}/></div>
            </div>


    );
};

export default dynamic(() => Promise.resolve(Sidemenu), {
    ssr: false,
});
