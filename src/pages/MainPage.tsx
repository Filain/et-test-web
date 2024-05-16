import {FC, PropsWithChildren} from "react";
import {Events} from "../components/EventsContainer/Events/Events";
import {Outlet} from "react-router-dom";


interface IProps extends PropsWithChildren {

}

const MainPage: FC<IProps> = () => {
    return (
        <div>
            MainPage
            <Events/>
            <Outlet/>
        </div>
    );
};

export {MainPage};