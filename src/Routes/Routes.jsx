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
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About Us/AboutUs";
import ParticipatedContest from "../Dashboard/User/ParticipatedContest";
import MyProfile from "../Dashboard/User/MyProfile";
import AddContest from "../Dashboard/ContentCreator/AddContest";
import ContestSubmitted from "../Dashboard/ContentCreator/ContestSubmitted";
import MyWinningContest from "../Dashboard/ContentCreator/MyWinningContest";
import Support from "../Dashboard/Admin/Support";
import Payment from "../Components/Payment/Payment";
import PaymentHistory from "../Dashboard/User/PaymentHistory";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allContest',
                element: <PrivateRoutes><AllContest></AllContest></PrivateRoutes>,
                loader: () => fetch('https://apex-artistry-server.vercel.app/arts')
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
                loader: ({ params }) => fetch(`https://apex-artistry-server.vercel.app/arts/${params.id}`)
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
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
            },
            {
                path: 'participatedContest',
                element: <ParticipatedContest></ParticipatedContest>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'addContest',
                element: <AddContest></AddContest>
            },
            {
                path: 'contestSubmitted',
                element: <ContestSubmitted></ContestSubmitted>
            },
            {
                path: 'myWinningContest',
                element: <MyWinningContest></MyWinningContest>
            },
            {
                path: 'support',
                element: <Support></Support>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }

]);


