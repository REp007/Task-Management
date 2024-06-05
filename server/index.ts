import express from 'express';
import cors from 'cors';
import userRouter from '@/routes/userRoute';
import TaskRouter from '@/routes/TaskRoute';
import connectDB from '@/config/db';


const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/auth', userRouter);
app.use('/api/tasks', TaskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));


