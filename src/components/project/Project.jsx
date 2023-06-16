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
          <img
            src={`/images/${project.name}/1.png`}
          />
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Project), {
  ssr: true,
});
