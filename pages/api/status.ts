import type { NextApiRequest, NextApiResponse } from 'next';

const status = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ AVAILABLE: true });
};

export default status;
