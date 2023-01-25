import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
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
  threshold: number;
}

export default function Category({
  id,
  products,
  title,
  category,
  threshold,
}: CategoryProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: threshold,
  });

  const setIntersectionObserverEntries = useIntersectionObserverEntries();

  const { asPath } = useRouter();

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
  }, [setIntersectionObserverEntries, id, entry, asPath]);

  return (
    <section ref={ref} id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
}
