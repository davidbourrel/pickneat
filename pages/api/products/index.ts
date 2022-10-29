import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type ResponseData = {
  products: Products[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'GET') {
    res.status(200).json({
      products: products ? products : [],
    });
  }
};

export default handler;
