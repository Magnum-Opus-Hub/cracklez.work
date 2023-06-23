import Image from 'next/image';
import styles from './Project.module.scss';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import dynamic from 'next/dynamic';
import urlFor from '../../../lib/urlFor';
import { Product } from '../../../typings';

type Props = {
  product: Product;
};

const Project: React.FC<Props> = ({ product }) => {
  const { isMobile } = useIsMobile();


  if (!product) {
    return null; 
  }

  return (
    <div className={styles.project}>
      <div className={styles.projectImg}>
        <Link href={`/${product._id}`} key={product._id}>
          {product.images && product.images.length > 0 && (
            <Image
              src={urlFor(product.images[0]).url()}
              alt={product.name}
              width={isMobile ? 350 : 400}
              height={isMobile ? 350 : 400}
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Project;
