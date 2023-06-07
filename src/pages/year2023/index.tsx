//@ts-nocheck
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import useIsMobile from '../../hooks/useIsMobile';
import React from 'react';
import projects from '../../utils/projects';
import Project from '../../components/project/Project';

export function Year2023() {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMobile ? styles.containerMobile : styles.container}>
        <div className={styles.projectsContainer}>
          {projects.map((proj) =>
            proj.year === '2023' ? (
              <Project key={proj.name} project={proj}>
                {proj.name}
              </Project>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Year2023), {
  ssr: true,
});
