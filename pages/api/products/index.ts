import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type Data = Products[];

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    res.status(200).json(products);
  }
};

export default handler;
