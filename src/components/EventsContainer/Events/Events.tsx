import {FC, useEffect, useState} from "react";
import {IEvent} from "../../../interfases/event";
import {eventServices} from "../../../servises/eventServices";
import {useSearchParams} from "react-router-dom";
import {Event} from "../Event/Event";
import css from './Events.module.css'

interface IProps  {

}

const Events: FC<IProps> = () => {
    const [event, setEvent] = useState<IEvent[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});
    const page=query.get('page');

    useEffect(() => {
        eventServices.getAll(page).then(({data:{data}})=>setEvent(data))
    }, [page]);

    return (
        <div className={css.events_wrap}>
            {event.map((item, index) => <Event key={index} event={item}/>)}
        </div>
    );
};

export {Events};