import { cookieInterceptor } from '@/middlewares/cookie-interceptor';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<{ name: string }>
) => {
  return response.status(200).json({ name: 'John Doe' });
};

export default cookieInterceptor(handler);
