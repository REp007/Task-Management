import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState, useContext } from "react"
import type { User } from "@/types/type"
import { useNavigate } from "react-router-dom"
import { ContextApp } from '@/context/ContextComp';
import type { InitState } from '@/context/ContextComp';

const Login = () => {
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const state = useContext<InitState>(ContextApp);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Reset the error state

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            localStorage.setItem('token', data.token);
            
            state.setUser(data.user);
            navigate('/tasks')
        } catch (error) {
            setError(error.message);
            console.error('There was an error!', error);
        }
    }

    return (
        <>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Login Page
            </h1>
            <menu className="flex justify-center items-center mt-5">
                <form onSubmit={handleSubmit} action="" method="post">
                    <div className="flex flex-col gap-y-5 flex-nowrap justify-center items-center space-x-2">
                        <Input
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full md:w-[400px]"
                            placeholder="Email"
                        />
                        <Input
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            type="password"
                            className="w-full md:w-[400px]"
                            placeholder="Password"
                        />
                        <Button type="submit">Login</Button>
                    </div>
                    {error && (
                        <p className="mt-2 text-red-600">
                            {error}
                        </p>
                    )}
                </form>
            </menu>
        </>
    )
}

export default Login;
