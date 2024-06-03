import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NotFound} from "./pages/notFound.page";
import {Logs} from "./pages/logs.page";
import {Home} from "./pages/home.page";
import {Matches} from "./pages/matches.page";
import {Settings} from "./pages/settings.page";
import {AppWrapper} from "./components/shell/appWrapper";
import {SignUp} from "./pages/signUp.page";
import {Login} from "./pages/login.page";

export type ElementMap = {
    [x: any]: Element;
}

const FootyTrackrElements: ElementMap = {
    home: <Home/>,
    logs: <Logs/>,
    matches: <Matches/>,
    settings: <Settings/>,
    join: <SignUp />,
    signIn: <Login />
}

const childrenRoutes = Object.entries(FootyTrackrElements).map(([path, element]) => ({
    path: `/${path}`,
    element: element as JSX.Element
}));

const additionalRoutes = [
    {
        path: '/*',
        element: <NotFound />
    }
];



const router = createBrowserRouter([
    {
        path: '/',
        element: <AppWrapper />,
        children: [...childrenRoutes, ...additionalRoutes]
    }
])

export function Router() {
    return (
        <RouterProvider router={router}/>
    )
}