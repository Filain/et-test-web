import {AxiosResponse} from "axios";
import {IFormValues, IUser, IUserList} from "../interfases/user";
import {urls} from "../constans/urls";
import {axiosService} from "./axiosService";

const userService={
    getAll:(page:string, id:string, name:string, email:string):Promise<AxiosResponse<IUserList>> => axiosService.get(urls.users.byId(id),{params:{page,name,email}}),
    saveUser:(data:IFormValues):Promise<AxiosResponse<IUser>> => axiosService.post(urls.users.base,data),
    byDay:(id:string):Promise<AxiosResponse<number>> => axiosService.get(urls.users.byDay(id))
}

export {userService}