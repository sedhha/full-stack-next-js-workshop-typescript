import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
export const authInterceptor =
  (handler: NextApiHandler) =>
  (request: NextApiRequest, response: NextApiResponse) => {
    if (
      !request.headers.authorization ||
      !request.headers.authorization?.includes('Bearer ')
    )
      return response.json({ authenticated: false });

    const verification = verifyToken(
      request.headers.authorization.split(' ')[1]
    );

    if (verification.verified)
      (
        request as NextApiRequest & {
          creds: { username: string; password: string };
        }
      ).creds = {
        username: verification.username ?? '',
        password: verification.password ?? '',
      };
    else return response.json({ authenticated: false });

    return handler(request, response);
  };

const verifyToken = (tokenString: string) => {
  try {
    const result = jwt.verify(
      tokenString,
      process.env.SUPER_SECRET_KEY ?? 'Ahh-Common'
    ) as { username: string; password: string };
    return {
      verified: true,
      username: result.username,
      password: result.password,
    };
  } catch (error) {
    return { verified: false };
  }
};
