import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import useIsMobile from '../hooks/useIsMobile';
import {useRouter} from "next/router";
import React from "react";
import Project from '../components/project/Project';
import projects from '../utils/projects';


export function Home() {
  const { isMobile } = useIsMobile();

    const router = useRouter();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMobile ? styles.containerMobile : styles.container}>
            <div className={styles.projectsContainer}>
                {projects.map((proj) => (
                    <Project key={proj.name} project={proj}>
                      {proj.name}
                    </Project>
                ))}
            </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
