import {FC, useEffect, useState} from "react";
import {IEvent} from "../../../interfases/event";
import {eventService} from "../../../servises/eventService";
import {useSearchParams} from "react-router-dom";
import {Event} from "../Event/Event";
import css from './Events.module.css'

interface IProps {

}

const Events: FC<IProps> = () => {
    const [event, setEvent] = useState<IEvent[]>([])
    const [totalPage, setTotalPage] = useState<number>()

    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const page = query.get('page');


    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    useEffect(() => {
        eventService.getAll(page).then(({data}) => {
            setEvent(data.data)
            setTotalPage(data.meta.total)
            setPrevNext({prev: data.meta.page - 1, next: data.meta.page + 1})
        })
    }, [page]);

    return (
        <>
            <div className={css.events_wrap}>
                {event.map((item, index) => <Event key={index} event={item}/>)}
            </div>
            <div>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={prevNext.next > totalPage} onClick={next}>next</button>
            </div>
        </>
    );
};

export {Events};