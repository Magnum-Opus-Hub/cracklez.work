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
                <div className={isMobile ? styles.titleMobile : styles.title}>{project?.name}</div>
                    <div
                        className={styles.description
                        }
                    >
                        {project?.description}
                    </div>
                <div
                    className={styles.link
                    }
                >
                    <a href={project?.link} rel="noreferrer" target="_blank">{project?.link}</a>
                </div>
            </div>
            <div
                className={
                     styles.imageRollContainer
                }
            >
                {project &&
                    Array.from({ length: 5 }).map((item, index) => (
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
                                src={`/images/${project?.name}/${index}.jpg`}
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
