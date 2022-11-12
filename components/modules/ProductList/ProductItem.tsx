import { FC, ReactNode } from 'react';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './ProductList.module.css';

interface ProductItemProps {
  children: ReactNode;
  title: string;
}

const ProductItem: FC<ProductItemProps> = ({ children, title }) => {
  return (
    <li>
      <div className={styles.headingContainer}>
        <Heading level={HeadingLevelEnum.Two}>{title}</Heading>
        <span className={styles.stroke} />
      </div>
      {children}
    </li>
  );
};

export default ProductItem;
