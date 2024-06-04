import { model, Schema} from 'mongoose';


const taskSchema = new Schema({
    title: String,
    user_id: Schema.Types.ObjectId,
    description: String,
    is_resolved: Boolean
});

const Task = model('Task', taskSchema);

export default Task;