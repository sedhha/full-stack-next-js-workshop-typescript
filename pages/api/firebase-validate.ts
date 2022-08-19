import { NextApiRequest, NextApiResponse } from 'next';
import { verifyIDToken } from '../../firebase/backend/firebase-ops';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const bearerToken = request.headers?.authorization;
  if (!bearerToken || !bearerToken?.includes('Bearer '))
    return response.status(401).json({ message: 'UnAuthorized User' });

  const idToken = bearerToken?.split('Bearer ')[1];
  const result = await verifyIDToken(idToken);
  return response.status(result.error ? 400 : 201).json(result);
};

export default handler;
