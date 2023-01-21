import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './MenuCategories.module.css';
import Category from './Category';
import { CategoryEnum, Product } from '_types/products';
import { ClassNameComponentProps } from '_types/components';
import useWindowSize from 'hooks/useWindowSize';

interface MenuCategoriesProps extends ClassNameComponentProps {
  ssrProducts: Product[];
}

export default function MenuCategories({
  ssrProducts,
  className,
}: MenuCategoriesProps) {
  const t = useTranslations('Home');

  const computedClassName = useMemo(
    () => `${className} ${styles.menuCategories}`,
    [className]
  );

  const { width } = useWindowSize();
  const rightThreshold = useMemo(() => (width > 1024 ? 1 : 0.33), [width]);

  return (
    <div className={computedClassName} data-test="menuCategories">
      <Category
        id="burgers"
        title={t('burgerTitle')}
        products={ssrProducts}
        category={CategoryEnum.Burger}
        threshold={rightThreshold}
      />
      <Category
        id="sides"
        title={t('sideTitle')}
        products={ssrProducts}
        category={CategoryEnum.Side}
        threshold={rightThreshold}
      />
      <Category
        id="drinks"
        title={t('drinkTitle')}
        products={ssrProducts}
        category={CategoryEnum.Drink}
        threshold={rightThreshold}
      />
      <Category
        id="desserts"
        title={t('dessertTitle')}
        products={ssrProducts}
        category={CategoryEnum.Dessert}
        threshold={rightThreshold}
      />
      <Category
        id="salads"
        title={t('saladTitle')}
        products={ssrProducts}
        category={CategoryEnum.Salad}
        threshold={rightThreshold}
      />
    </div>
  );
}
