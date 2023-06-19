import React, { useEffect } from 'react';
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
  },
];

const yearLinks = [
  {
    url: '/year2023',
    label: '2023'
  },
  {
    url: '/year2022',
    label: '2022'
  },
  {
    url: '/year2021',
    label: '2021'
  }
];


const Nav = ({ page, burger }) => {
  const router = useRouter()

  const onCloseBurger = () => {
    if (typeof burger === 'function') {
      burger(false);
    }
  };

  const { isMobile } = useIsMobile();
  return (
      <div className={isMobile ? style.containerMobile : style.container}>
          <div onClick={onCloseBurger} >
        <Link href={'/'}>
                {
                  (router.pathname === '/') ? <div className={style.linkActive}>
                    <div className={style.bullet}></div>
                    <p>Work</p>
                  </div> : <p>Work</p>
                }
        </Link>
        </div>
          <div className={isMobile ? style.navGroupMobile : style.navGroup}>
            {yearLinks.map((link, i) => (
               <div onClick={onCloseBurger} key ={i}>
              <Link key={i} href={link.url} className={page === '' ? style.linkActive : ''}>
              {
                    (router.pathname === link.url) ? <div className={style.linkActive}>
                      <img src={`/images/arrow.svg`} alt=""/>
                      <p>{link.label}</p>
                    </div> : <p>{link.label}</p>
                  }
              </Link>
              </div>
            ))}
          </div>
          {links.map((link, i) => (
            <div onClick={onCloseBurger} key ={i}>
              <Link key={i} href={link.url} className={page === '' ? style.linkActive : ''}>
              {
                  (router.pathname === link.url) ? <div className={style.linkActive}>
                    <div className={style.bullet}></div>
                    <p>{link.label}</p>
                  </div> : <p>{link.label}</p>
                }
            </Link>
            </div>
        ))}
      </div>
  );
};

export default dynamic(() => Promise.resolve(Nav), {
  ssr: true,
})
