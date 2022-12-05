import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Heading from 'components/elements/Heading';
import { HeadingLevelEnum } from 'components/elements/Heading/types';
import styles from './Product.module.css';
import PriceTag from 'components/elements/PriceTag';
import Quantity from 'components/elements/Quantity';
import { pick } from 'lodash';
import { Product } from '_types/products';
import { getProduct, getProducts } from 'database/products';
import PageLayout from 'components/modules/PageLayout';
import { LangEnum } from '_types/lang';

interface ProductIdProps {
  ssrProduct: Product;
}

export default function ProductId({ ssrProduct }: ProductIdProps) {
  const t = useTranslations('Product');

  const { name, description, price, image, allergens } = ssrProduct;

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

          <Quantity product={ssrProduct} className={styles.productQuantity} />
        </div>
      </div>
    </main>
  );
}

ProductId.messages = ['Product', ...PageLayout.messages, ...Quantity.messages];

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  let ssrProduct = null as unknown as Product;

  if (params?.id) {
    ssrProduct = getProduct(params.id as string);
  }

  return {
    props: {
      ssrProduct,
      messages: pick(
        await import(`../../messages/${locale}.json`),
        ProductId.messages
      ),
    },
  };
}

export async function getStaticPaths({
  locales = [LangEnum.En],
}: GetStaticPathsContext) {
  const products = getProducts();

  const paths = products
    .map((product) =>
      locales.map((locale: string) => ({
        params: { id: product.product_id },
        locale,
      }))
    )
    .flat();

  return { paths, fallback: false };
}
