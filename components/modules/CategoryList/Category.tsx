import Heading from 'components/elements/Heading';
import styles from './CategoryList.module.css';
import ProductList from '../ProductList';
import { CategoryEnum, Product } from '_types/products';
import { Maybe } from '_types/maybe';

interface CategoryProps {
  id: string;
  products: Maybe<Product[]>;
  title: string;
  category: CategoryEnum;
}

export default function Category({
  id,
  products,
  title,
  category,
}: CategoryProps) {
  return (
    <li>
      <div className={styles.headingContainer}>
        <Heading id={id} level={2} className={styles.heading}>
          {title}
        </Heading>
        <span className={styles.stroke} />
      </div>
      <ProductList products={products} category={category} />
    </li>
  );
}
