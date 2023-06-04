import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projects from '../utils/projects';
import styles from '../styles/work.module.scss';
import useIsMobile from "../hooks/useIsMobile";

 const WorkDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState({});
    const parsedId = parseInt(project.id);
    const numberOfItems = projects.length - 1;
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

     const {isMobile} = useIsMobile();

    useEffect(() => {
        if (!id) {
            return;
        }
        setProject(projects[+id]);
    }, [id]);
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
                    project.images.map((path, index) => (
                        <div
                            className={styles.imgContainer}
                            key={index}
                        >
                                <img
                                    src={path}
                                    alt={project.name}
                                ></img>
                        </div>
                    ))}
                <div className={styles.buttonsContainer}>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    );
};

 export default WorkDetail
