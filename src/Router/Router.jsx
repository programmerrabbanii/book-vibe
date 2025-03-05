import { createBrowserRouter } from "react-router-dom";
import Root from "../Rot/Root";
import Home from "../Pages/Home";
import Listed from "../Pages/Listed";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PagesToRead from "../Pages/PagesToRead";

const router=createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"listed",
            element:<Listed></Listed>
        },
        {
            path:"pages",
            element:<PagesToRead></PagesToRead>
        },
        {
            path:"signin",
            element:<SignIn></SignIn>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        }
    ]
}])

export default router