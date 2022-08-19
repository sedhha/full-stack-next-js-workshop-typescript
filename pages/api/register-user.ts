import { signUpNewUser } from '@/firebase-server/firebase-ops';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { body } = request;
  const { username, password } = JSON.parse(body ?? '{}');
  console.log('Body = ', body, typeof body);
  if (!username || !password) {
    return response
      .status(400)
      .json({ message: 'Missing username or password' });
  }
  const result = await signUpNewUser(username, password);
  return response.status(result.error ? 400 : 201).json(result);
};

export default handler;
