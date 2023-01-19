import { useEffect, useMemo, useRef } from 'react';
import styles from './MenuCategories.module.css';
import { CategoryEnum, Product } from '_types/products';
import { Maybe } from '_types/maybe';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { MOBILE_HEADER_AND_NAV_CATEGORY_HEIGHT } from '_constants/app';
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
  const setIntersectionObserverEntries = useIntersectionObserverEntries();

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: `${MOBILE_HEADER_AND_NAV_CATEGORY_HEIGHT * -1}px 0px 0px 0px`,
    threshold: 0,
  });

  const isVisible = useMemo(
    () => !!entry?.isIntersecting,
    [entry?.isIntersecting]
  );

  useEffect(() => {
    if (isVisible && entry) {
      setIntersectionObserverEntries((c) => [...(c ?? []), entry]);
    } else {
      setIntersectionObserverEntries((c) => [
        ...(c
          ? c.filter(
              (currentEntry: IntersectionObserverEntry) =>
                currentEntry.target.id !== id
            )
          : []),
      ]);
    }
  }, [isVisible, setIntersectionObserverEntries, id, entry]);

  return (
    <section ref={ref} id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
}
