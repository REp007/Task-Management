import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import type { User } from "@/types/type";

import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Reset the error state

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
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
            // console.log(data);
            navigate('/login');
        } catch (error) {
            setError(error.message);
            console.error('There was an error!', error);
        }
    };

    return (
        <>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Register Page
            </h1>
            <menu className="flex justify-center items-center mt-5">
                <form onSubmit={handleSubmit} action="" method="post">
                    <div className="flex flex-col gap-y-5 flex-nowrap justify-center items-center space-x-2">
                        <Input
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            type="text"
                            className="w-full md:w-[400px]"
                            placeholder="Name"
                        />
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
                        <Button type="submit">Register</Button>
                    </div>
                    {error && (
                        <p className="mt-2 text-red-600">
                            {error}
                        </p>
                    )}
                </form>
            </menu>
        </>
    );
};

export default Register;