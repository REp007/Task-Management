import { Document } from "mongoose";
export interface Task extends Document {
    userId: string; 
    title: string;
    description: string;
    is_resolved: boolean;
}