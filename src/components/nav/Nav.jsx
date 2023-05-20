import React from 'react';
import { useRouter } from 'next/router';
import style from './Nav.module.scss';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';
import Link from "next/link";


const links = [
  {
    url: '/contact',
    label: 'Contact',
  },
  {
    url: '/about',
    label: 'About',
  }
];



const Nav = ({ page }) => {

  const router = useRouter()



  const { isMobile } = useIsMobile();
  return (
      <div className={isMobile ? style.containerMobile : style.container}>
        <Link href={'/'}>
                {
                  (router.pathname === '/') ? <div className={style.linkActive}>
                    <div className={style.bullet}></div>
                    <p>Work</p>
                  </div> : <p>Work</p>
                } 
        </Link>
          <div className={isMobile ? style.navGroupMobile : style.navGroup}>
          <Link href={''}>
          <div
                  className={`${isMobile ? style.linkMobile : style.link} ${
                      router.pathname === '/' ? style.sublinkActive : ''
                  }`}
              >
                <p>2023</p>
              </div>
          </Link>
          <Link href={''}>
          <div
                  className={`${isMobile ? style.linkMobile : style.link} ${
                      router.pathname === '/' ? style.sublinkActive : ''
                  }`}
              >
                <p>2022</p>
              </div>
          </Link>
          <Link href={''}>
          <div
                  className={`${isMobile ? style.linkMobile : style.link} ${
                      router.pathname === '/' ? style.sublinkActive : ''
                  }`}
              >
                <p>2021</p>
              </div>
          </Link>
          <Link href={''}>
          <div
                  className={`${isMobile ? style.linkMobile : style.link} ${
                      router.pathname === '/' ? style.sublinkActive : ''
                  }`}
              >
                <p>2020</p>
              </div>
          </Link>
          <Link href={''}>
          <div
                  className={`${isMobile ? style.linkMobile : style.link} ${
                      router.pathname === '/' ? style.sublinkActive : ''
                  }`}
              >
                <p>2019</p>
              </div>
          </Link>
          </div>
        {links.map((link, i) => (
            <Link
                className={page === 'home' ? style.linkActive : ''}
                key={i}
                href={link.url}
            >
              {
                  (router.pathname === link.url) ? <div className={style.linkActive}>
                    <div className={style.bullet}></div>
                    <p>{link.label}</p>
                  </div> : <p>{link.label}</p>
                } 
            </Link>
        ))}
      </div>
  );
};

// @ts-ignore
export default dynamic(() => Promise.resolve(Nav), {
  ssr: false,
})
