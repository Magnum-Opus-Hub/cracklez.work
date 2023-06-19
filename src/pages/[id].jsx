import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projects from '../utils/projects';
import styles from '../styles/work.module.scss';
import Modal from "../components/modal/Modal"

 const WorkDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState({});
    const [clickedImg, setClickedImg ] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const parsedId = parseInt(project.id);
    const numberOfItems = projects.length - 1;
    const totalLength = project.images

    const handlePrevious = () => {
        const previousId = parsedId - 1;
        if(parsedId > 0){
            router.push(`/${previousId}`)
        } else router.push(`/`)
    }

    const handleNext = () => {
        const nextId = parsedId + 1;
        if(parsedId < numberOfItems){
            router.push(`/${nextId}`)
        } else router.push(`/`)
    }

    const handleClick = (item,index) =>{
        setCurrentIndex(index)
        setClickedImg(item)
    }

    const handleRotationRight = () =>{
        if(currentIndex +1 >= totalLength){
            setCurrentIndex(0);
            const newUrl = project.images[0]
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = project.images.filter((item)=>{
            return project.images.indexOf(item) === newIndex;
        })
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const handleRotationLeft = ()=>{
        if(currentIndex === 0){
            setCurrentIndex(totalLength - 1)
            const newUrl = project.images[totalLength-1];
            setClickedImg(newUrl)
        }
        const newIndex = currentIndex -1;
        const newUrl = project.images.filter((item)=>{
            return project.images.indexOf(item) === newIndex;
        })
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        console.log(
            currentIndex, clickedImg
        )
        if (!id) {
            return;
        }
        setProject(projects[+id]);
    }, [clickedImg, currentIndex, id]);
    return (
        <>
            <Head>
                <title>Work</title>
            </Head>
            <div
                className={
                styles.projectContainer
                }
            >


                    <div className={styles.detailsContainer}>

                        <div>
                        <div className={styles.title}>{project?.name}</div>
                            <div
                                className={styles.client
                                }
                            >
                                <span>Client:</span>
                                {project?.client}
                            </div>
                            <div
                                className={styles.year
                                }
                            >
                                <span>Year:</span>
                                {project?.year}
                            </div>
                        </div>

                        <div
                            className={styles.description
                            }
                        >
                            <span>Info:</span>
                            {project?.description}
                        </div>

                    </div>
            </div>
            <div
                className={
                    styles.imageRollContainer
                }
            >
                {project && project.images &&
                    project.images.map((item, index) => (
                        <div
                            className={styles.imgContainer}
                            key={index}
                        >
                                <Image
                                    onClick={()=> handleClick(item,index)}
                                    src={item}
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

 export default dynamic(() => Promise.resolve(WorkDetail), {
    ssr: true,
  });
