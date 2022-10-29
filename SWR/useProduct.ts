import useSWR from 'swr';
import { Products } from '_types/products';
import fetcher from './fetcher';

const useProduct = (id: string) => {
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  const product = data?.product as Products;

  return {
    product,
    isProductLoading: !error && !product,
    isProductError: error,
  };
};

export default useProduct;
