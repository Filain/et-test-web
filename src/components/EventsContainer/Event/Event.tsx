import {FC} from "react";
import {IEvent} from "../../../interfases/event";
import css from './Event.module.css'
import {NavLink} from "react-router-dom";

interface IProps  {
    event: IEvent
}

const Event: FC<IProps> = ({event}) => {
    const {date, title, description,organizer,id}=event
    return (
        <div className={css.event_wrap}>
            <p>id: {id}</p>
            <p>date: {date}</p>
            <p>title: {title}</p>
            <p>description: {description}</p>
            <p>organizer: {organizer}</p>
        </div>
    );
};

export {Event};