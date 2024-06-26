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
} from "@/components/ui/table";
import { Input } from "../ui/input";
import TaskEdit from '@/components/Tasks/TaskEdit';
import { Button } from "@/components/ui/button";
import { Task } from "@/types/type";

const TaskList = () => {
    const { tasks, setTasks } = useContext<InitState>(ContextApp);

    const handleUpdate = async (id: string, isResolved: boolean) => {
        const token = localStorage.getItem('token') ?? '';
        if (!token) return;

        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_resolved: isResolved })
            });

            if (response.ok) {
                const updatedTasks = tasks.map(task =>
                    task._id === id ? { ...task, is_resolved: isResolved } : task
                );
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                setTasks(updatedTasks);
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = async (id: string) => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const updatedTasks = tasks.filter(task => task._id !== id);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                setTasks(updatedTasks);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const unresolvedTasks = tasks.filter(task => !task.is_resolved);
    const resolvedTasks = tasks.filter(task => task.is_resolved);

    const renderTaskAsCard = (task: Task) => (
        <div key={task._id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-semibold">{task.title.charAt(0).toUpperCase() + task.title.slice(1).toLowerCase()}</div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">Status:</span>
                    <Input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={!!task.is_resolved}
                        onChange={() => handleUpdate(task._id, !task.is_resolved)}
                    />
                </div>
            </div>
            <p className="text-gray-600 mb-2">{task.description.length > 30 ? `${task.description.slice(0, 30)}...` : task.description}</p>
            <div className="flex justify-between items-center">
                <TaskEdit task={task} setTasks={setTasks} />
                <Button variant="destructive" onClick={() => handleDelete(task._id)}>Delete</Button>
            </div>
        </div>
    );

    return (
        <div>
            <div className="hidden md:block">
                <Table>
                    <TableCaption>Unresolved Tasks</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Status</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Title</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight hidden xl:table-cell">Description</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Edit</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {unresolvedTasks.map(task => (
                            <TableRow key={task._id}>
                                <TableCell>
                                    <Input
                                        type="checkbox"
                                        className="w-4"
                                        checked={!!task.is_resolved}
                                        onChange={() => handleUpdate(task._id, !task.is_resolved)}
                                    />
                                </TableCell>
                                <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    {task.title.charAt(0).toUpperCase() + task.title.slice(1).toLowerCase()}
                                </TableCell>
                                <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight overflow-hidden text-ellipsis max-w-xs whitespace-nowrap hidden xl:table-cell">
                                    {task.description.length > 10 ? `${task.description.slice(0, 10)}...` : task.description}
                                </TableCell>
                                <TableCell className="text-right">
                                    <TaskEdit task={task} setTasks={setTasks} />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="destructive" onClick={() => handleDelete(task._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="block md:hidden">
                <h2 className="text-2xl font-semibold mb-4">Unresolved Tasks</h2>
                {unresolvedTasks.map(task => renderTaskAsCard(task))}
            </div>
            <div className="my-[100px]"></div>
            <div className="hidden md:block">
                <Table>
                    <TableCaption>Resolved Tasks</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Status</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Title</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight hidden xl:table-cell">Description</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Edit</TableHead>
                            <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {resolvedTasks.map(task => (
                            <TableRow key={task._id}>
                                <TableCell>
                                    <Input
                                        type="checkbox"
                                        className="w-4"
                                        checked={!!task.is_resolved}
                                        onChange={() => handleUpdate(task._id, !task.is_resolved)}
                                    />
                                </TableCell>
                                <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    {task.title.charAt(0).toUpperCase() + task.title.slice(1).toLowerCase()}
                                </TableCell>
                                <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight overflow-hidden text-ellipsis max-w-xs whitespace-nowrap hidden xl:table-cell">
                                    {task.description.length > 10 ? `${task.description.slice(0, 10)}...` : task.description}
                                </TableCell>
                                <TableCell className="text-right">
                                    <TaskEdit task={task} setTasks={setTasks} />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="destructive" onClick={() => handleDelete(task._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="block md:hidden">
                <h2 className="text-2xl font-semibold mb-4">Resolved Tasks</h2>
                {resolvedTasks.map(task => renderTaskAsCard(task))}
            </div>
        </div>
    )
}

export default TaskList;