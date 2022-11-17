import useSWR from 'swr';
import { Products } from '_types/products';
import fetcher from './fetcher';

const useProducts = () => {
  const { data, error } = useSWR(`/api/products`, fetcher);

  return {
    products: data as Products[],
    isProductsLoading: !error && !data,
    isProductsError: error,
  };
};

export default useProducts;
