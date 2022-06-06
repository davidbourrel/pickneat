import auth0 from '../../lib/auth0';
import type { NextApiRequest, NextApiResponse } from 'next';
import { errorInterface } from '_types/error';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return await auth0.handleLogin(req, res);
  } catch (error) {
    return res
      .status((error as errorInterface).status || 500)
      .end((error as errorInterface).message);
  }
};

export default login;
