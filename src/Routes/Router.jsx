import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/RegisterPage/Register";
import CardViewDetails from "../Pages/CardViewDetails/CardViewDetails";
import About from "../Pages/AboutPage/About";
import Contact from "../Pages/ContactPage/Contact";
import UpDateProfile from "../Pages/UpdateProfile/UpDateProfile";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <PrivetRoute><About></About></PrivetRoute>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/updateProfile',
                element: <PrivetRoute><UpDateProfile></UpDateProfile></PrivetRoute>
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
                path: '/card-view-details/:id',
                element: <PrivetRoute><CardViewDetails></CardViewDetails></PrivetRoute>
            }
        ]
    }
]);

export default router;