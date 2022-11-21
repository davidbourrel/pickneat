import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  AVAILABLE: boolean;
};

const status = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ AVAILABLE: true });
};

export default status;
