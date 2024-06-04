import { model, Schema} from 'mongoose';
import type { User as UserType} from '@/types/User';
const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});


const User = model<UserType>('User', userSchema);

export default User;