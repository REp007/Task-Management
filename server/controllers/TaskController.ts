import type { Request, Response } from 'express';
import type { Task as TaskType } from '@/types/Task';
import Task from '@/models/Task';
import type { RequestUser } from '@/types/User';


const getTaks = async (req: RequestUser, res: Response) => {
    // res.json(req.user);
    try {
        const tasks = await Task.find({ user: req.user._id });
        return res.status(200).json(tasks)
    } catch (error) {
        res.json({ message: error });
    }
};

const createTask = async (req: RequestUser, res: Response) => {
    const { title, description } = req.body;
    // try{
    //     res.json(req.user);
    // }catch(error){
    //     res.status(500).json(error)
    // }
    try {
        const newTask = new Task({
            title,
            description,
            user: req.user._id,
            is_resolved: false
        });

        await newTask.save();
        return res.status(201).json({
            message: 'Task created successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
}

const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, is_resolved } = req.body;
    try {
        const findTask = await Task.findOne({ _id: id });
        if (!findTask) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }
        if (title) {
            findTask.title = title;
        }
        if (description) {
            findTask.description = description;
        }
        if (is_resolved) {
            findTask.is_resolved = is_resolved;
        }
        await findTask.save();
        return res.status(200).json({
            message: 'Task updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }
        return res.status(200).json({
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error'
        });
    }
};


export {
    getTaks,
    createTask,
    updateTask,
    deleteTask
};

