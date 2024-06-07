import TaskList from "@/components/Tasks/TaskList";
import AddTask from '@/components/Tasks/AddTask';
import { Link } from 'react-router-dom';
import { useContext } from "react";

import { ContextApp } from "@/context/ContextComp";
import type { InitState } from "@/context/ContextComp";
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const TaskComp = () => {
    const { user } = useContext<InitState>(ContextApp);
    if (!user) {
        return (
            <>
                <header>
                    <h1 className="scroll-m-20 text-4xl mb-5 font-extrabold tracking-tight lg:text-5xl">
                        Tasks List
                    </h1>
                </header>
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Login</AlertTitle>
                    <AlertDescription>
                        You should login to manage your tasks.
                        <p>
                            <Link to={`/login`}
                                className="text-blue-900"
                            >login now!</Link>
                        </p>
                        <p>
                            if you dont have account!&nbsp;&nbsp;&nbsp;
                            <Link to={`/register`} className="text-blue-900" >Register!</Link>
                        </p>
                    </AlertDescription>
                </Alert>
            </>
        )
    }
    return (
        <>
            <header>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Tasks List
                </h1>
                <div className="flex flex-row p-[20px] mt-[10px] gap-20">
                    <div className="p">
                        <div className="text-lg font-semibold">You want to added an Task ?</div>
                    </div>
                    <AddTask />
                </div>
            </header>

            <section
                className="mt-5"
            >
                <div className="list-Tasks md:px-[150px] lg:px-[250px] ">
                    <TaskList />
                </div>
            </section>
        </>
    )
}

export default TaskComp;