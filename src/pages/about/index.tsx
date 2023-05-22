import React, {useRef} from 'react';
import style from './About.module.scss';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.containerLeft}>
                <div className= {style.title} >Hi! I`m Cracklez :)</div>
                <div className={style.description}> I`m a ajksgdauysgvdiashdiashd
                sjkdgajshgdajshdjabasjidhashujgd ashjdsaghdajshd
                 ashdjhasgdjas. asjgdaghjsfdjghasdfgoieueeyeyw.huiauydfd,
                aksjdashgdjaioduq.djaoisdiasuidhakshkdhsjd.</div>
                <div className={style.socialContainer}>
                    <div className={style.socialTitle}>
                        Social
                    </div>
                    <div className={style.socialPlatforms}>
                        <div>Behance</div>
                        <div>Instagram</div>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
            <h1>img placeholder</h1>
            <div className={style.copy}>© 2023 Cracklez Studio</div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(About), {
    ssr: false,
});
