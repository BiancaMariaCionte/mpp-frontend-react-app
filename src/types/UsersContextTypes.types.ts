import { MoveClass } from "../models/MoveClass";

import { ReactNode } from "react";

export type UsersContextType = {
    moveClasses: MoveClass[];
    addMoveClass: (user: MoveClass) => void;
    removeMoveClass: (userId: number) => void;

};

export type UsersContextProviderType  = {
    userContext: UsersContextType;
    children: ReactNode;
};