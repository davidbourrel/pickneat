import useSWR from 'swr';
import { Products } from '_types/products';
import fetcher from './fetcher';

const useProducts = () => {
  const { data, error } = useSWR(`/api/products`, fetcher);

  const products = data?.products as Products[];

  return {
    products,
    isProductsLoading: !error && !products,
    isProductsError: error,
  };
};

export default useProducts;
