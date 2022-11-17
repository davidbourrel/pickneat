import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = products.find(
      (product) => product.product_id === id
    ) as Products;

    res.status(200).json(product);
  }
};

export default handler;
