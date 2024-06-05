import NotFoundComp from "@/layout/404/404";
import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <h1>Login</h1> },
            { path: 'register', element: <h1>Register</h1> },
            { path: 'tasks', element: <h1>TaskList</h1> },
            // { path: 'tasks/create', element: <h1>TaskCreate</h1> },
            // { path: 'tasks/:taskId', element: <h1>TaskDetail</h1> },
            // { path: 'tasks/:taskId/edit', element: <h1>TaskEdit</h1> },
        ],
        errorElement: <NotFoundComp />
    },
]);

export default router;