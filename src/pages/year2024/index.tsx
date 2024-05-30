import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import useIsMobile from '../../hooks/useIsMobile';
import React from 'react';
import Project from '../../components/project/Project';
import { groq } from 'next-sanity';
import { client } from "../../../sanity/lib/client";
import { Product } from '../../../typings';

interface Year2024Props {
  projects: Product[];
}

export const Year2024: React.FC<Year2024Props> = ({ projects }) => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Head>
        <title>2024 Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMobile ? styles.containerMobile : styles.container}>
        <div className={styles.projectsContainer}>
        {projects.map((project) => (
  <Project key={project._id} product={project} />
))}
        </div>
      </div>
    </>
  );
}

export default Year2024;

export async function getServerSideProps() {
  const projects: Product[] = await client.fetch(
    groq`*[_type == "product" && year == "2024"]{
      _id,
      name,
      client,
      year,
      description,
      images,
    }`
  );
  return { props: { projects } };
}