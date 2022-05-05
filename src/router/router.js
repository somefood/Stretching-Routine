import { Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/Sign";
import Main from "../pages/Main";

const routePage = [
    {
        pathName: '/',
        component: <SignIn />
    },
    {
        pathName: '/main',
        component: <Main />
    },
    {
        pathName: '*',
        component: <NotFound />
    },
]


export default routePage