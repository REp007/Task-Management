import { useContext } from "react";

import { ContextApp } from "@/context/ContextComp";
import type { InitState } from "@/context/ContextComp";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "../ui/input";
// import { Button } from "../ui/button";
import ActionButton from '@/components/Tasks/ActionButton';
import { AlertCircle } from "lucide-react"
import { Link } from 'react-router-dom';

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const TaskList = () => {
    const { tasks, user } = useContext<InitState>(ContextApp);
    // console.log(state);

    if (!user) {
        return (
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
        )
    }

    return (
        <Table>
            <TableCaption>A list of Tasks</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Status</TableHead>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Title</TableHead>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map(task => (
                    <TableRow key={task.id}>
                        <TableCell>
                            <Input
                                className="w-4"
                                type="checkbox"

                                checked={task.is_resolved}
                            />
                        </TableCell>
                        <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight">
                            {`${task.title.split('')[0].toUpperCase()}${task.title.split('').slice(1).join('').toLocaleLowerCase()}`}
                        </TableCell>
                        <TableCell className="text-right">
                            <ActionButton task_id={task.id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default TaskList