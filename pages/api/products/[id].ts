import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type Data = Products;

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = products.find(
      (product) => product.product_id === id
    ) as Products;

    res.status(200).json(product);
  }
};

export default handler;
