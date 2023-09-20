import React from 'react';
import style from './About.module.scss';
import useIsMobile from '../../hooks/useIsMobile';

const About = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className={style.container}>
          <div className={style.containerLeft}>
            <div className={style.title}>Hi! I am Cracklez :)</div>
            <img src="/images/cracklez.png" alt="cracklez" />
            <div className={style.description}>
            I'm a illustrator and graphic designer based in Bucharest, Romania. I'm a 90s kid so I grew up watching all kinds of cartoons and animes which later on inspired me to draw. Most of my personal work is inspired by robots, 90s animes, t-shirt graphics, skate culture, music, cartoons, toys and video games. Clients usually describe my work to be "nostalgic" and "eye catching".
            </div>
            <div className={style.socialContainer}>
              <div className={style.socialTitle}>Social</div>
              <div className={style.socialPlatforms}>
                <div>
                  <a target="_blank" href="https://www.instagram.com/cracklez/">Instagram</a>
                </div>
                <div>
                  <a target="_blank" href="https://www.behance.net/cracklez">Behance</a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/Cracklez3https://twitter.com/Cracklez3">Twitter</a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/Cracklez3https://twitter.com/Cracklez3">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.copy}>© 2023 Cracklez Studio</div>
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.containerLeft}>
            <div className={style.title}>Hi! I am Cracklez :)</div>
            <div className={style.description}>
            I'm a illustrator and graphic designer based in Bucharest, Romania. I'm a 90s kid so I grew up watching all kinds of cartoons and animes which later on inspired me to draw. Most of my personal work is inspired by robots, 90s animes, t-shirt graphics, skate culture, music, cartoons, toys and video games. Clients usually describe my work to be "nostalgic" and "eye catching".
            </div>
            <div className={style.socialContainer}>
              <div className={style.socialTitle}>Social</div>
              <div className={style.socialPlatforms}>
              <div>
                  <a target="_blank" href="https://www.instagram.com/cracklez/">Instagram</a>
                </div>
                <div>
                  <a target="_blank" href="https://www.behance.net/cracklez">Behance</a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/Cracklez3https://twitter.com/Cracklez3">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <img src="/images/cracklez.png" alt="cracklez" />
          <div className={style.copy}>© 2023 Cracklez Studio</div>
        </div>
      )}
    </>
  );
};

export default About;
