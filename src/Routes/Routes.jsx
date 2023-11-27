import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllContest from "../Pages/AllContest/AllContest";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import DetailsPage from "../Pages/AllContest/DetailsPage";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Dashboard/MyCart/MyCart";
import ManageUser from "../Dashboard/Admin/ManageUser";
import ManageContest from "../Dashboard/Admin/ManageContest";


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
            },
            {
                path: 'details/:id',
                element: <DetailsPage></DetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:3000/arts/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'users',
                element: <ManageUser></ManageUser>
            },
            {
                path: 'manageContest',
                element: <ManageContest></ManageContest>
            }
        ]
    }

]);


