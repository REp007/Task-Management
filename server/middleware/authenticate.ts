import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';
import type {RequestUser, User} from '@/types/User';

const authenticate = (req: RequestUser, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as User;
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default authenticate;
