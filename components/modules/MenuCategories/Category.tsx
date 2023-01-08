import Heading from 'components/elements/Heading';
import styles from './MenuCategories.module.css';
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
    <section id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
}
