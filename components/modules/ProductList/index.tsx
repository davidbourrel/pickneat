import styles from './ProductList.module.css';
import { ProductListProps } from './types';

// Static components
import ProductCardCol from 'components/elements/ProductCard/ProductCardCol';

const ProductList = ({ products, category }: ProductListProps) => {
  const filteredProductsByCategory = products?.filter(
    (product) => product.category === category
  );

  return filteredProductsByCategory &&
    filteredProductsByCategory?.length > 0 ? (
    <ul className={styles.productList}>
      {filteredProductsByCategory.map((product, i) => (
        <ProductCardCol key={`burger-key-${i}`} product={product} />
      ))}
    </ul>
  ) : null;
};
export default ProductList;
