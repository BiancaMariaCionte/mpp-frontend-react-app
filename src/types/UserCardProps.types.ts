import { MoveClass } from "../models/MoveClass"; 

export type UserCardPropsType = {
    givenUser: MoveClass;
    removeMethod: (userId: number) => void;
};