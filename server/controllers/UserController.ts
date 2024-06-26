
import User from '@/models/User';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { User as UserType } from '@/types/User';



const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUSer = new User({
            name,
            email,
            password: hashPassword
        });

        await newUSer.save();

        res.status(201).json({
            message: 'User registered successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
};


const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user: UserType = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: 'Invalid Info'
            });
        }

        // Check Password 
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({
                message: 'Passwor wrong'
            });
        }

        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.ACCESS_TOKEN_SECRET!);

        res.status(200).json({
            token, user: {
                name: user.name,
                email: user.email
            }
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
};

export {
    login,
    register
};