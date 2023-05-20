import React, { useEffect } from 'react';
import Sidemenu from '../sidemenu/Sidemenu'
import style from './Preloader.module.scss'
import dynamic from "next/dynamic";
import useIsMobile from "../../hooks/useIsMobile";

const Preloader = () => {
  useEffect(()=>{
    preloaderAnimation()
  },[])
    return (
        <div className={style.preloader}>
          <h1>preloader</h1>
        </div>
    )
};

export default dynamic(() => Promise.resolve(Preloader), {
    ssr: false,
});