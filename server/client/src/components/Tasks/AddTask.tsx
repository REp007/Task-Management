import React, { useState, useContext } from "react";
import { ContextApp } from '@/context/ContextComp';
import type { InitState } from '@/context/ContextComp';
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
} from "@/components/ui/dialog"
import type { Task } from "@/types/type";

const AddTask = () => {
    const { user, setTasks } = useContext<InitState>(ContextApp);
    const [task, setTask] = useState<Task>({
        userId: '',
        title: '',
        description: '',
        is_resolved: false
    });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (user) {
            try {
                
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('http://localhost:3000/api/tasks', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: task.title,
                        description: task.description
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                setSuccessMessage('Task created successfully');
                setTask({ 
                    userId: '',
                    title: '',
                    description: '',
                    is_resolved: false
                });

                const updatedTasksResponse = await fetch('http://localhost:3000/api/tasks', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (updatedTasksResponse.ok) {
                    const updatedTasksData = await updatedTasksResponse.json();
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    setTasks(updatedTasksData);
                }

            } catch (error) {
                console.error('Error creating task:', error);
            }
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add new Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                        <DialogDescription>
                            When you add title of the task and detailed. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Title</Label>
                            <Input
                                value={task.title}
                                name="title"
                                className="col-span-3"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">Description</Label>
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
    )
}

export default AddTask;
