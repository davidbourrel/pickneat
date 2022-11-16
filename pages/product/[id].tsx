import { FC } from 'react';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useProduct from '../../SWR/useProduct';
import Loader from 'components/elements/Loader';
import styles from './Product.module.css';

const ProductId: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { product, isProductLoading, isProductError } = useProduct(
    id as string
  );

  if (isProductLoading)
    return (
      <div className={styles.productContainer}>
        <Loader />
      </div>
    );
  if (isProductError)
    return <div className={styles.productContainer}>Error</div>;

  return (
    <main className="sidePadding">
      <Head>
        <title>PickN`Eat | {product.name}</title>
      </Head>
      <Heading level={HeadingLevelEnum.One}>PRODUCT PAGE</Heading>
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div> {product.description}</div>
    </main>
  );
};

export default ProductId;
