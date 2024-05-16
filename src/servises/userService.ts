import {AxiosResponse} from "axios";
import {IFormValues, IUser, IUserList} from "../interfases/user";
import {urls} from "../constans/urls";
import {axiosService} from "./axiosService";

const userService={
    getAll:(page:string, id:string):Promise<AxiosResponse<IUserList>> => axiosService.get(urls.users.byId(id),{params:{page}}),
    saveUser:(data:IFormValues):Promise<AxiosResponse<IUser>> => axiosService.post(urls.users.base,data),
}

export {userService}