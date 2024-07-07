import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    res.setHeader('Set-Cookie', [
        'next-auth.session-token=; Max-Age=0; path=/',
        'next-auth.callback-url=; Max-Age=0; path=/',
    ]);

    return res.status(200).json({ message: 'Logged out successfully' });
};