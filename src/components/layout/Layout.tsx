import React from 'react';
import Sidemenu from '../sidemenu/Sidemenu'
import style from './Layout.module.scss'
import dynamic from "next/dynamic";
import useIsMobile from "../../hooks/useIsMobile";

const Layout = ({ children }) => {

    const {isMobile} = useIsMobile();

    return (
        <div className={isMobile ? style.containerMobile : style.container}>
            <div className={style.sidemenu}>
                <Sidemenu/>
            </div>
            <div className={ isMobile ? style.childrenMobile :style.children}>{children}</div>
        </div>
    )
};

export default dynamic(() => Promise.resolve(Layout), {
    ssr: false,
});