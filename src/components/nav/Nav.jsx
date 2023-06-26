import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePathname} from "next/navigation"
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
  const pathname = usePathname()


  const onCloseBurger = () => {
    if (typeof burger === 'function') {
      burger(false);
    }
  };
  
  const { isMobile } = useIsMobile();

  if (pathname === '/studio') {
    return null
  }
  return (
      <div className={isMobile ? style.containerMobile : style.container}>
          <div onClick={onCloseBurger} >
        <Link href={'/'}>
                {
                  (router.pathname === '/') ? <div className={style.linkActive}>
                    <p>Work</p>
                  </div> : <div className={style.link}>
                    <p>Work</p>
                  </div>
                }
        </Link>
        </div>
          <div className={isMobile ? style.navGroupMobile : style.navGroup}>
            {yearLinks.map((link, i) => (
               <div onClick={onCloseBurger} key ={i}>
              <Link key={i} href={link.url} className={page === '' ? style.linkActiveYear : ''}>
              {
                    (router.pathname === link.url) ? <div className={style.linkActiveYear}>
                      <img src={`/images/arrow.svg`} alt=""/>
                      <p>{link.label}</p>
                    </div> : <div className={style.linkYear}>
                    <p>{link.label}</p>
                  </div>
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
                    <p>{link.label}</p>
                  </div> : <div className={style.link}>
                    <p>{link.label}</p>
                  </div>
                }
            </Link>
            </div>
        ))}
        {process.env.NODE_ENV === "development" && (
            <Link href="/studio">
              <p> Studio </p>
                </Link>
                )}
      </div>
  );
};

export default dynamic(() => Promise.resolve(Nav), {
  ssr: true,
})
