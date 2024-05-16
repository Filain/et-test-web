import {AxiosResponse} from "axios";
import {IEventList} from "../interfases/event-list";
import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const eventServices={
    getAll:(page:string):Promise<AxiosResponse<IEventList>> => axiosService.get(urls.events.base,{params:{page}})
}

export {
    eventServices
}