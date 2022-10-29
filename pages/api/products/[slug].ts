import { NextApiRequest, NextApiResponse } from 'next';
import { Products } from '_types/products';
import { products } from '../../../database/products';

type ResponseData = {
  product: Products[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { slug } = req.query;

  const product = products
    ? products.filter((product) => product.product_id === slug && product)
    : [];

  if (req.method === 'GET') {
    res.status(200).json({
      product,
    });
  }
};

export default handler;
