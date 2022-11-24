import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type Data = Products;

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query } = req;
  const { id } = query;

  if (req.method === 'GET') {
    const filtered = products.find((p) => p.product_id === id) as Products;

    res.status(200).json(filtered);
  }
};

export default handler;
