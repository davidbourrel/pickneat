import { useEffect, useRef } from 'react';
import styles from './MenuCategories.module.css';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useIntersectionObserverEntries from 'contexts/appContext/useIntersectionObserverEntries';
import { CategoryProps } from './types';

// Static Components
import ProductList from 'components/modules/ProductList';
import Heading from 'components/elements/Heading';

const Category = ({ id, products, title, category }: CategoryProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: '-50% 0% -50% 0%',
  });

  const setIntersectionObserverEntries = useIntersectionObserverEntries();

  useEffect(() => {
    const isCategoryVisible = !!entry?.isIntersecting;

    setIntersectionObserverEntries((entries) => {
      if (isCategoryVisible && !!entry) {
        return [...entries, entry];
      }

      if (entries?.length > 0) {
        // Remove when the category is no more visible
        return entries.filter((currentEntry) => currentEntry.target.id !== id);
      }

      // Return empty array if no categories are visible
      return [];
    });
  }, [setIntersectionObserverEntries, id, entry]);

  return (
    <section ref={ref} id={id} className={styles.category}>
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>

      <ProductList products={products} category={category} />
    </section>
  );
};
export default Category;
