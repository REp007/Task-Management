
export interface User{
    _id?: string;
    name?: string;
    email: string;
    password: string;
}

export interface Task{
    _id?: string;
    userId: string; 
    title: string;
    description: string;
    is_resolved: boolean;
}