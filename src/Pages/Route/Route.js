import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Checkout from "../Checkout/Checkout";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: '/projects/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-nine-lilac.vercel.app/${params.id}`)
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])
export default router; 