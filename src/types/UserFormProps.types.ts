import { MoveClass } from "../models/MoveClass"; 

export type UserFormType = {
    idInput: React.RefObject<HTMLInputElement>;
    instructorNameInput: React.RefObject<HTMLInputElement>;
    typeInput: React.RefObject<HTMLInputElement>;
    youtubeUrlInput: React.RefObject<HTMLInputElement>;
    dificultyInput: React.RefObject<HTMLInputElement>;
    givenUser?: MoveClass;
};