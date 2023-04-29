import { Navigate, createBrowserRouter } from "react-router-dom"

import Main from "../Layouts/Main"
import Home from "../pages/Home/Home/Home"
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivayteRoute from "./PrivayteRoute";
import Terms from "../pages/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },

        ]
    },
    {
        path: "category",
        element: <Main />,
        children: [
            {
                path: ":id",
                element: <Category />,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/categories/${params.id}`)
            },
        ],
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivayteRoute><News></News></PrivayteRoute>,
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router