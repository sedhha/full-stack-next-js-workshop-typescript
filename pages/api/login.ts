import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.headers.authorization);
  if (
    !request.headers.authorization ||
    !request.headers?.authorization?.includes('Basic ')
  ) {
    return response
      .status(400)
      .json({ message: 'Authentication Token Missing' });
  }
  const token = request.headers.authorization.split(' ')?.[1];
  const decoded = Buffer.from(token, 'base64').toString('utf8');
  const [username, password] = decoded.split(':');
  const encryptedToken = jwt.sign(
    { username, password },
    process.env.SUPER_SECRET_KEY ?? 'Ahh-Common'
  );
  return response.json({ result: encryptedToken });
};

export default handler;
