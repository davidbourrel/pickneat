import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useProduct from '../../SWR/useProduct';
import Loader from 'components/elements/Loader';
import styles from './Product.module.css';
import Image from 'next/image';
import PriceTag from 'components/elements/PriceTag';
import Quantity from 'components/elements/Quantity';
import { useTranslations } from 'next-intl';

export default function ProductId() {
  const router = useRouter();
  const { id } = router.query;

  const t = useTranslations('Product');

  const { product, isProductLoading, isProductError } = useProduct(
    id as string
  );

  if (isProductLoading)
    return (
      <main className="sidePadding">
        <div className={styles.productContainer}>
          <Loader />
        </div>
      </main>
    );
  if (isProductError)
    return (
      <main className="sidePadding">
        <div className={styles.productContainer}>Error</div>
      </main>
    );

  const { name, description, price, image, allergens } = product;

  return (
    <main className="sidePadding">
      <Head>
        <title>{`PickN\`Eat | ${name}`}</title>
      </Head>
      <div className={styles.productContainer}>
        <Image
          src={image}
          alt={name}
          width={400}
          height={140}
          className={styles.productImage}
        />

        <div className={styles.productInfo}>
          <Heading level={HeadingLevelEnum.One}>{name}</Heading>
          <PriceTag price={price} className={styles.productPrice} />
          <section>
            <Heading level={HeadingLevelEnum.Two} className={styles.productH2}>
              {t('description')}
            </Heading>
            <div className={styles.productDescription}> {description}</div>
          </section>
          <section>
            <Heading level={HeadingLevelEnum.Two} className={styles.productH2}>
              {t('allergens')}
            </Heading>
            <p>
              {allergens && allergens.length > 0 ? allergens : t('noAllergens')}
            </p>
          </section>

          <Quantity product={product} className={styles.productQuantity} />
        </div>
      </div>
    </main>
  );
}
