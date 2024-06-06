import React, { createContext, useState } from "react";
import type { User, Task } from "@/types/type";

export interface InitState {
    user: User | null;
    tasks: Task[];
    setUser?: (user: User | null) => void; 
    setTasks?: (tasks: Task[]) => void;
}

const defaultState: InitState = {
    user: null,
    tasks: [{
        id: 'zxcdsds0f',
        userId: '1',
        title: 'title',
        description: 'bla bla',
        is_resolved: false
    }],
};

export const ContextApp = createContext<InitState>(defaultState); // Added explicit type for createContext

const ContextComp = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(defaultState.user);
    const [tasks, setTasks] = useState<Task[]>(defaultState.tasks);

    // Added setUser and setTasks functions
    const setUserState = (newUser: User | null) => {
        setUser(newUser);
    };

    const setTasksState = (newTasks: Task[]) => {
        setTasks(newTasks);
    };

    return (
        <ContextApp.Provider value={{ user, tasks, setUser: setUserState, setTasks: setTasksState }}>
            {children}
        </ContextApp.Provider>
    );
};

export default ContextComp;
