import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const cookieInterceptor =
  (handler: NextApiHandler) =>
  (request: NextApiRequest, response: NextApiResponse) => {
    console.log('Req Body = ', request.headers);
    return handler(request, response);
  };
