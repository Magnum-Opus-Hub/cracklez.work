import React from 'react';
import { useRouter } from 'next/router';
import style from './Nav.module.scss';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from 'next/image';


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
            {yearLinks.map((link, i) => (
              <Link key={i} href={link.url} className={page === '' ? style.linkActive : ''}>
              {
                    (router.pathname === link.url) ? <div className={style.linkActive}>
                      <Image src={`/images/arrow.svg`} alt="" />
                      <p>{link.label}</p>
                    </div> : <p>{link.label}</p>
                  }
              </Link>
            ))}
          </div>
          {links.map((link, i) => (
            <Link key={i} href={link.url} className={page === '' ? style.linkActive : ''}>
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

export default dynamic(() => Promise.resolve(Nav), {
  ssr: false,
})
