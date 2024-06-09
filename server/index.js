import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import TaskRouter from './routes/TaskRoute.js';
import connectDB from './config/db.js';
import YAML from 'yamljs';
import SwaggerUi from "swagger-ui-express";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
connectDB();
app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:5173'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
const swaggerDocument = YAML.load('./swagger.yml');
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
app.use('/api/auth', userRouter);
app.use('/api/tasks', TaskRouter);
app.use(express.static(path.join(__dirname, '/client/dist/')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
