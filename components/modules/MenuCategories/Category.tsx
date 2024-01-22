import Heading from 'components/elements/Heading';
import ProductList from 'components/modules/ProductList';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useEffect, useMemo, useRef } from 'react';
import { useActiveCategoryStore } from 'stores/useActiveCategoryStore';
import styles from './MenuCategories.module.css';
import { CategoryProps } from './types';

const Category = ({ id, products, title, category }: CategoryProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: '-50% 0% -50% 0%',
  });

  const entries = useActiveCategoryStore((state) => state.entries);
  const addEntry = useActiveCategoryStore((state) => state.addEntry);
  const removeEntry = useActiveCategoryStore((state) => state.removeEntry);

  useEffect(() => {
    const isCategoryVisible = !!entry?.isIntersecting;

    if (isCategoryVisible) {
      return addEntry(entry);
    }

    if (entries?.length > 0) {
      // Remove when the category is no more visible
      return removeEntry(id);
    }
  }, [entries?.length, entry, id, addEntry, removeEntry]);

  const categoryTitle = useMemo(
    () => (
      <Heading level={2} className={styles.heading}>
        <span>{title}</span>
      </Heading>
    ),
    [title]
  );

  return (
    <section ref={ref} id={id} className={styles.category}>
      {categoryTitle}
      <ProductList products={products} category={category} />
    </section>
  );
};
export default Category;
