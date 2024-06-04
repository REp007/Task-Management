import { model, Schema} from 'mongoose';
import type { Task as TaskType } from '@/types/Task';

const taskSchema = new Schema({
    title: String,
    user_id: Schema.Types.ObjectId,
    description: String,
    is_resolved: Boolean
});

const Task = model<TaskType>('Task', taskSchema);

export default Task;