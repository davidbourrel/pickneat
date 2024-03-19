import Heading from 'components/elements/Heading';
import ProductList from 'components/modules/ProductList';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useEffect, useMemo, useRef } from 'react';
import { AppDispatch, RootState } from 'redux/store';
import {
  addEntry,
  removeEntry,
} from '../../../redux/activeCategory/activeCategorySlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import styles from './MenuCategories.module.css';
import { CategoryProps } from './types';

const Category = ({ id, products, title, category }: CategoryProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    rootMargin: '-50% 0% -50% 0%',
  });

  const { entries } = useAppSelector(
    (state: RootState) => state.activeCategory
  );

  const dispatch = useAppDispatch<AppDispatch>();

  useEffect(() => {
    const isCategoryVisible = !!entry?.isIntersecting;

    if (isCategoryVisible) {
      dispatch(addEntry(entry));
    } else if (entries?.length > 0) {
      // Remove when the category is no more visible
      dispatch(removeEntry(id));
    }
  }, [entries?.length, entry, id]);

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
