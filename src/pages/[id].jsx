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
                    <div className={styles.title}>{project?.name}</div>
                
                    <div className={styles.detailsContainer}>
                    
                        <div>
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
                            {project?.description}
                        </div>
                        
                    </div>
            </div>
            <div
                className={
                     styles.imageRollContainer
                }
            >
                {project &&
                    Array.from({ length: 3}).map((item, index) => (
                        <div
                            style={{
                                flexWrap: 'nowrap',
                                width: '90%',
                                margin: "auto",
                                marginBottom: '24px',
                            }}
                            key={index}
                        >
                            <Image
                                src={`/images/${project?.name}/${index}.png`}
                                layout="responsive"
                                alt={project.name}
                                key={index}
                                width={1280}
                                height={720}
                                loading="lazy"
                            ></Image>
                        </div>
                    ))}
            </div>
        </>
    );
};

 export default WorkDetail
