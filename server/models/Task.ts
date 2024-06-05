import { model, Schema} from 'mongoose';
import type { Task as TaskType } from '@/types/Task';

const taskSchema = new Schema({
    title: String,
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: String,
    is_resolved: Boolean
});

const Task = model<TaskType>('Task', taskSchema);

export default Task;