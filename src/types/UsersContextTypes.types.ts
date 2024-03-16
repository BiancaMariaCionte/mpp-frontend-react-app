import { MoveClass } from "../models/MoveClass";

import { ReactNode } from "react";

export type UsersContextType = {
    users: MoveClass[];
    addUser: (user: MoveClass) => void;
    removeUser: (userId: number) => void;
};

export type ProviderType = {
    userContext: UsersContextType;
    children: ReactNode;
};