import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import useIsMobile from '../hooks/useIsMobile';
import Project from '../components/project/Project';
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

const query = groq`*[_type == "product"]{
  _id,
  name,
  images,
  sequence,
  "slug": slug.current
} | order(sequence asc) { _id, name, images, sequence, slug}`


export default function Home() {
  const { isMobile } = useIsMobile();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await client.fetch(query);
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={isMobile ? styles.containerMobile : styles.container}>
        <div className={styles.projectsContainer}>
          {products && products.map(product => (
            <Project key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
