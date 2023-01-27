import { useEffect, useRef } from 'react';
import styles from './MenuCategories.module.css';
import { CategoryEnum, Product } from '_types/products';
import { Maybe } from '_types/maybe';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useIntersectionObserverEntries from 'contexts/appContext/useIntersectionObserverEntries';

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
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0,
    rootMargin: '-50% 0% -50% 0%',
  });

  const setIntersectionObserverEntries = useIntersectionObserverEntries();

  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;

    if (isVisible && entry) {
      setIntersectionObserverEntries((entries) => {
        const indexOfEntry = entries?.findIndex(
          (currentEntry: IntersectionObserverEntry) =>
            currentEntry?.target?.id === entry?.target?.id
        );

        const entryNotExist = indexOfEntry === -1;

        if (entryNotExist) {
          return [...entries, entry];
        }

        return [];
      });
    } else {
      setIntersectionObserverEntries((entries) => {
        if (entries?.length > 0) {
          return entries.filter(
            (currentEntry) => currentEntry.target.id !== id
          );
        }

        return [];
      });
    }
  }, [setIntersectionObserverEntries, id, entry]);

  return (
    <section ref={ref} id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
}
