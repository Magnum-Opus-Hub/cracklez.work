import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/work.module.scss';
import Modal from "../components/modal/Modal"
import { Product } from '../../typings';
import { client } from "../../sanity/lib/client";
import urlFor from "../../lib/urlFor";
import { groq } from "next-sanity";
import { GetServerSideProps } from 'next';



interface Params {
  params: {
    id: string;
    nextId: string | null;
  };
}
interface ProjectProps {
  project: Product;
  nextId: string | null;
}
  const WorkDetail: React.FC<ProjectProps> = ({ project, nextId }) => {
    const router = useRouter();
    const [clickedImg, setClickedImg ] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);


    const totalLength = project.images.length;
    const parsedId = parseInt(project._id);

    const handlePrevious = () => {
      const previousId = parsedId - 1;
      if(previousId >= 0){
        router.push(`/${previousId}`)
      } else router.push(`/`)
    }

    const handleNext = () => {
      if (nextId){
        router.push(`/${nextId}`);
      } else {
        router.push(`/`); // If we reach the end, loop back to the first item.
      }
    };

    const handleClick = (item,index) =>{
      setCurrentIndex(index)
      setClickedImg(item)
    }

    const handleRotationRight = () => {
      if (currentIndex < totalLength - 1) {
        const newIndex = currentIndex + 1;
        const newUrl = project.images[newIndex]
        setClickedImg(newUrl);
        setCurrentIndex(newIndex);
      } else {
        setClickedImg(null);
      }
    };


    const handleRotationLeft = ()=>{
      if(currentIndex === 0){
        setCurrentIndex(totalLength - 1)
        const newUrl = project.images[totalLength-1];
        setClickedImg(newUrl)
      }
      const newIndex = currentIndex -1;
      const newUrl = project.images.filter((item,index)=>{
        return index === newIndex;
      })
      const newItem = newUrl[0];
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    }

    // useEffect(() => {
    //   if (clickedImg == null && project.images.length > 0) {
    //     handleClick(project.images[0], 0);
    //   }
    // }, [project]);

   return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className={styles.projectContainer}>
        <div className={styles.detailsContainer}>
          <div>
            <div className={styles.title}>{project.name}</div>
            <div className={styles.client}><span>Client:</span>{project.client}</div>
            <div className={styles.year}><span>Year:</span>{project.year}</div>
          </div>
          <div className={styles.description}><span>Info:</span>{project.description}</div>
        </div>
      </div>
      <div className={styles.imageRollContainer}>
        {project.images && project.images.map((item, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image
              onClick={()=> handleClick(item,index)}
              src={urlFor(item).url()}
              alt={project.name}
              height={700}
              width={700}
            />
          </div>
        ))}
        <div className={styles.buttonsContainer}>
          <button onClick={handlePrevious}><Image src={`/images/arrow1.svg`} alt="" height={15} width={25}  />Previous</button>
          <button onClick={handleNext}>Next<Image src={`/images/arrow2.svg`} alt="" height={15} width={25} /></button>
        </div>
        {clickedImg &&
          <Modal clickedImg={clickedImg} totalLength={totalLength} handleRotationRight={handleRotationRight} handleRotationLeft={handleRotationLeft} setClickedImg={setClickedImg} />
        }
      </div>
    </>
  );
};

export default WorkDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const project: Product = await client.fetch(
    groq`*[_type == "product" && _id == "${id}"][0]{
      _id,
      name,
      client,
      year,
      description,
      images,
    }`
  );

  const allProjects: Product[] = await client.fetch(
    groq`*[_type == "product"]|order(sequence asc){
      _id,
    }`
  );

  const currentIndex = allProjects.findIndex(p => p._id === id);
  const nextId = allProjects[currentIndex + 1]?._id || null;

  return { props: { project, nextId } };
};
