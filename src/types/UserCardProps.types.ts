import { MoveClass } from "../models/MoveClass"; 

export type UserCardPropsType = {
    givenUser: any;
    removeMethod: (userId: number) => void;
};