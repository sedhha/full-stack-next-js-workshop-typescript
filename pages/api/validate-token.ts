import { authInterceptor } from '@/middlewares/auth-interceptor';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({
    authenticated: true,
    payload: (
      req as NextApiRequest & { creds: { username: string; password: string } }
    ).creds,
  });
};

export default authInterceptor(handler);
