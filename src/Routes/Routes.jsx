import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/singUp",
                element: <SingUp></SingUp>,
            },
            {
                path: "/checkout/:id",
                element: <CheckoutPage></CheckoutPage> ,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ],
    },
]);
export default router