import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllContest from "../Pages/AllContest/AllContest";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allContest',
                element: <PrivateRoutes><AllContest></AllContest></PrivateRoutes>,
                loader: () => fetch('http://localhost:3000/arts')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    },

]);


