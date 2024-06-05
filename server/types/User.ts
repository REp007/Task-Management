import { Document } from "mongoose";
import type { Request } from "express";

export interface User extends Document {
    _id?: string;
    name: string;
    email: string;
    password: string;
}

export interface RequestUser extends Request{
    user: User
}
