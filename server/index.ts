import express from 'express';
import cors from 'cors';
import userRouter from '@/routes/userRoute';
import TaskRouter from '@/routes/TaskRoute';
import connectDB from '@/config/db';
import YAML from 'yamljs';
import SwaggerUi from "swagger-ui-express";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

const swaggerDocument = YAML.load('./swagger.yml');

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
app.use('/api/auth', userRouter);
app.use('/api/tasks', TaskRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));


