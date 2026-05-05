import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";

export const routes = createBrowserRouter([
    {element:<Protected><Home/></Protected>,
    path:'/'}
    ,

    {element:<Login/>,
    path:"/login"
    },
    
    {element:<Register/>,
    path:"/register"
    }
])