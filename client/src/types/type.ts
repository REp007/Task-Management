
export interface User{
    name?: string;
    email: string;
    password: string;
}

export interface Task{
    userId: string; 
    title: string;
    description: string;
    is_resolved: boolean;
}