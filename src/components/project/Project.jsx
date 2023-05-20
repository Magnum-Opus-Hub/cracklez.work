import Image from 'next/image';
import styles from './Project.module.scss';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';

const Project = ({ project }) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.project}>
      <div className={styles.projectImg}>
        <Link href={`/${project.id}`}>
        <Image
          src={`/images/${project.name}/cover.jpg`}
          layout="responsive"
          alt={project.name}
          width={1740}
          height={980}
        ></Image>
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Project), {
  ssr: false,
});
