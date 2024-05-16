import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Events} from "./components/EventsContainer/Events/Events";

const router =createBrowserRouter([
    {path: '/', element: <MainPage/>, children:[
            {index: true, element: <Navigate to={'events'}/>},
            {path: 'events', element: <Events/>}
        ]},
])

export {router}