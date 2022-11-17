import useSWR from 'swr';
import { Products } from '_types/products';
import fetcher from './fetcher';

const useProduct = (id: string) => {
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  return {
    product: data as Products,
    isProductLoading: !error && !data,
    isProductError: error,
  };
};

export default useProduct;
