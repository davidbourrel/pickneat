import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../database/products';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const productsResponse = products ? products : [];

    res.status(200).json(productsResponse);
  }
};

export default handler;
