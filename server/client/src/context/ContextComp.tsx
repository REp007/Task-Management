import React, { createContext, useState, useEffect } from "react";
import type { User, Task } from "@/types/type";

export interface InitState {
    user: User | null;
    tasks: Task[];
    setUser?: (user: User | null) => void;
    setTasks?: (tasks: Task[]) => void;
    logout?: () => void;
}

const defaultState: InitState = {
    user: null,
    tasks: [],
};

export const ContextApp = createContext<InitState>(defaultState);

const ContextComp = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(defaultState.user);
    const [tasks, setTasks] = useState<Task[]>(defaultState.tasks);

    const setUserState = (newUser: User | null) => {
        setUser(newUser);
    };

    const setTasksState = (newTasks: Task[]) => {
        setTasks(newTasks);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setTasks([]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('https://task-app-047s.onrender.com/api/tasks', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                
                setTasks(data);

            } catch (error) {
                // console.error('There was an error fetching tasks:', error);
                // console.log('There was an error fetching tasks:', error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <ContextApp.Provider value={{ user, tasks, setUser: setUserState, setTasks: setTasksState, logout }}>
            {children}
        </ContextApp.Provider>
    );
};

export default ContextComp;