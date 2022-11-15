import { FC } from 'react';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './CategoryList.module.css';
import ProductList from '../ProductList';
import { CategoryEnum, Products } from '_types/products';
import { Maybe } from '_types/maybe';

interface CategoryProps {
  products: Maybe<Products[]>;
  title: string;
  category: CategoryEnum;
}

const Category: FC<CategoryProps> = ({ products, title, category }) => {
  return (
    <li>
      <div className={styles.headingContainer}>
        <Heading level={HeadingLevelEnum.Two}>{title}</Heading>
        <span className={styles.stroke} />
      </div>
      <ProductList products={products} category={category} />
    </li>
  );
};

export default Category;
