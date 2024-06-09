import NotFoundComp from "@/layout/404/404";
import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";

import TaskComp from '@/pages/Tasks/TaskComp';
import Profile from "@/pages/Auth/Profile";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'profile', element: <Profile/>},
            { path: 'login', element: <Login/> },
            { path: 'register', element: <Register/> },
            { path: 'tasks', element: <TaskComp/> },
            // { path: 'tasks/create', element: <h1>TaskCreate</h1> },
            { path: 'tasks/:taskId', element: <h1>TaskDetail</h1> },
            // { path: 'tasks/:taskId/edit', element: <h1>TaskEdit</h1> },
        ],
        errorElement: <NotFoundComp />
    },
]);

export default router;