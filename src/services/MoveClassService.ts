import axios from "axios";
import { MoveClass } from "../models/MoveClass";
import { UserDataType } from "../types/UserDataType";

const apiEndPoint = 'http://localhost:8080/api/moveClasses';

function convertDtoToUser(userToConvert: UserDataType) {
    return new MoveClass(userToConvert.id!, userToConvert.instructorName, userToConvert.type, userToConvert.youtubeUrl, userToConvert.difficulty);
}

export async function getMoveClassById(requiredId: string) {
    let response = await axios.get(apiEndPoint + '/getMoveClass/' + requiredId);
    return convertDtoToUser(response.data);
}

export async function getAllMoveClasses() {
    let response = await axios.get(apiEndPoint + '/getAll');
    let users: MoveClass[] = [];

    response.data.forEach((currentUser: UserDataType) => {
        users.push(convertDtoToUser(currentUser));
    });

    console.log(users);
    return users;
}

export async function getMoveClassPage(requiredPage: number, isAscending: boolean, pageSize: number = 4) {
    try {
    let response = await axios.get(apiEndPoint + '/getPage?page=' + requiredPage + "&isAscending=" + isAscending + "&pageSize=" + pageSize);
    let users: MoveClass[] = [];

    response.data.forEach((currentUser: UserDataType) => {
        users.push(convertDtoToUser(currentUser));
    });

    return users;
    } catch (error) {
        console.log('eroare');
        console.error((error as Error).message);
        return [];  
    }   
}

export async function getMoveClassCount() {
    let response = await axios.get(apiEndPoint + '/countMoveClasses');

    console.log(response.data);
    return response.data;
}

export async function addMoveClass(userToAdd: UserDataType) {
    await axios.post(apiEndPoint + '/addMoveClass', {
        ...userToAdd
    });
    
}

export async function updateMoveClass(userToUpdate: UserDataType) {
    await axios.put(apiEndPoint + '/updateMoveClass', {
        ...userToUpdate
    });
}

export async function deleteMoveClass(userId: string) {
    await axios.delete(apiEndPoint + '/delete/' + userId);
}

export async function checkServerStatus() {
    console.log('Checking server status...');
    try {
        await axios.get(apiEndPoint + '/ping');
        return true;
    } catch (error) {
        return false;
    }
}