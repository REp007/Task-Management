import React, { useState, useContext } from "react";
import { ContextApp } from "@/context/ContextComp";
import type { InitState } from "@/context/ContextComp";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import type { Task } from "@/types/type";

interface TaskEditProps {
    task: Task;
}

const TaskEdit: React.FC<TaskEditProps> = ({ task: initialTask }) => {
    const { setTasks } = useContext<InitState>(ContextApp);
    const [task, setTask] = useState<Task>(initialTask);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        try {
            if (!token) {
                throw new Error('No token found');
            }

            const response = await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: task.title,
                    description: task.description,
                    is_resolved: task.is_resolved
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSuccessMessage('Task updated successfully');

            const updatedTasksResponse = await fetch('http://localhost:3000/api/tasks', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (updatedTasksResponse.ok) {
                const updatedTasksData = await updatedTasksResponse.json();
                setTasks(updatedTasksData);
            }

        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit Task</DialogTitle>
                        <DialogDescription>
                            Edit the title and description of the task. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">Title</Label>
                            <Input
                                value={task.title}
                                name="title"
                                className="col-span-3"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">Description</Label>
                            <Input
                                name="description"
                                value={task.description}
                                className="col-span-3"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </form>
                {successMessage && (
                    <div className="text-green-600">{successMessage}</div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default TaskEdit;
