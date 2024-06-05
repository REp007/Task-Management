import NotFoundComp from "@/layout/404/404";
import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
                {index: true, element: <Home/>},
        ],
        errorElement: <NotFoundComp/>

    },
]);

export default router;