import { useEffect, useMemo, useRef } from 'react';
import styles from './MenuCategories.module.css';
import { CategoryEnum, Product } from '_types/products';
import { Maybe } from '_types/maybe';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useMenuCategories from 'contexts/appContext/useMenuCategories';

// Static Components
import ProductList from 'components/modules/ProductList';
import Heading from 'components/elements/Heading';

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
  const { setActiveMenuCategory } = useMenuCategories();

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    rootMargin: `-111px 0px 0px 0px`,
  });

  const isVisible = useMemo(
    () => !!entry?.isIntersecting,
    [entry?.isIntersecting]
  );

  useEffect(() => {
    isVisible && setActiveMenuCategory(id);
  }, [isVisible, setActiveMenuCategory, id]);

  return (
    <section ref={ref} id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
}
