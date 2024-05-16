import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Events} from "./components/EventsContainer/Events/Events";
import {Users} from "./components/UserContainer/Users/Users";
import {RegistrationPage} from "./pages/RegistrationPage";

const router =createBrowserRouter([
    {path: '/', element: <MainPage/>, children:[
            {index: true, element: <Navigate to={'events'}/>},
            {path: 'events', element: <Events/>},
            {path: 'users/:id', element: <Users/>},
        ]},
    {path: 'registration/:id', element: <RegistrationPage/>},

])

export {router}