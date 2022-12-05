import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './CategoryList.module.css';
import ProductList from '../ProductList';
import { CategoryEnum, Product } from '_types/products';
import { Maybe } from '_types/maybe';

interface CategoryProps {
  products: Maybe<Product[]>;
  title: string;
  category: CategoryEnum;
}

export default function Category({ products, title, category }: CategoryProps) {
  return (
    <li>
      <div className={styles.headingContainer}>
        <Heading level={HeadingLevelEnum.Two}>{title}</Heading>
        <span className={styles.stroke} />
      </div>
      <ProductList products={products} category={category} />
    </li>
  );
}
