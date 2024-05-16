import {IEvent} from "./event";

export interface IEventList {
    data: IEvent[];
    meta: {
        page: number;
        total: number;
    };
}