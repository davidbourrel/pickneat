export const getProductFromAPI = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
  );
  const product = await res.json();
  return product;
};
