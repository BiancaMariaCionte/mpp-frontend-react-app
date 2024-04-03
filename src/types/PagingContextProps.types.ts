import { MoveClass } from "../models/MoveClass"

export type PagingContextProps = {
    currentUsers: MoveClass[],
    setCurrentUsers: (newUsers: MoveClass[]) => void,
    currentPage: number,
    setCurrentPage: (newPage: number) => void,
    pageSize: number
}