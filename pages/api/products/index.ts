import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type Data = Products[];

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    const productsResponse = products ? products : [];

    res.status(200).json(productsResponse);
  }
};

export default handler;
