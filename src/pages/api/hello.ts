// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { name: string };

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void => {
  console.info('req', req);
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
