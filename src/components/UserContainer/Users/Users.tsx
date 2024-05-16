import {FC, useEffect, useState} from "react";
import {User} from "../User/User";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {IUser} from "../../../interfases/user";
import {userService} from "../../../servises/userService";
import css from "./Users.module.css"

interface IProps {

}

const Users: FC<IProps> = () => {
    const {id} = useParams<{ id: string }>()
    const [user, setUser] = useState<IUser[]>([])

    const [totalPage, setTotalPage] = useState<number>()

    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const page = query.get('page');

    const navigate = useNavigate()



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
        userService.getAll(page,id).then(({data}) =>{
            setUser(data.data)
            setTotalPage(data.meta.total)
            setPrevNext({prev: data.meta.page-1, next: data.meta.page+1})} )


    }, [page,id]);

    return (
        <>
            <div><button onClick={()=>navigate('/events')}>To Events</button></div>
            {user.length === 0 ? (
                <div>
                    Nobody wants to visit this event
                </div>
            ) : (
                <>
                    <div className={css.users_wrap}>
                        {user.map((item, index) => <User key={index} user={item}/>)}
                    </div>
                    {user.length > 12 && (
                        <div>
                            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                            <button disabled={prevNext.next > totalPage} onClick={next}>next</button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export {Users};