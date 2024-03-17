import { UserForm } from '../../features/CRUD Operations/UserForm';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/button/Button';
import { MoveClass } from '../../models/MoveClass'; 

import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UsersContext } from '../../contexts/UsersContext';

import './AddUserPage.css';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    instructorNameInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    youtubeUrlInput: React.RefObject<HTMLInputElement>,
    dificultyInput: React.RefObject<HTMLInputElement>,
): MoveClass {
    if (!idInput.current || !instructorNameInput.current || !typeInput.current || !youtubeUrlInput.current || !dificultyInput.current)
        throw new Error('Inputs references are null');

    if ( //validate that all input fields have values
        !idInput.current.value ||
        !instructorNameInput.current.value ||
        !typeInput.current.value ||
        !youtubeUrlInput.current.value ||
        !dificultyInput.current.value
    )
        throw new Error('You must provide values for each field!');

        // extract the values from the input fields
    const userId: number = parseInt(idInput.current.value),
        userInstructorName: string = instructorNameInput.current.value,
        userType: string = typeInput.current.value,
        userYoutubeUrl: string = youtubeUrlInput.current.value,
        userDificulty: string = dificultyInput.current.value;

    return new MoveClass(userId, userInstructorName, userType, userYoutubeUrl,userDificulty);
}

export function AddUserPage() {
    document.title = 'Add class';

    const idInput = useRef<HTMLInputElement>(null);
    const instructorNameInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const youtubeUrlInput = useRef<HTMLInputElement>(null);
    const dificultyInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const usersContext = useContext(UsersContext)!;

    const handleOnClickWrapper = () => { //after we press the button Add class we return one page back (to the main page)
        try {
            const inputUser = handleOnClick(idInput, instructorNameInput, typeInput, youtubeUrlInput,dificultyInput );
            usersContext.addMoveClass(inputUser);
            navigate('/'); //because of this
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Layout>
            <div className='main-page-container' data-testid='main-page-container'>
                <div className='main-title'>Add user</div>

                <UserForm
                    idInput={idInput}
                    instructorNameInput={instructorNameInput}
                    typeInput={typeInput}
                    youtubeUrlInput={youtubeUrlInput}
                    dificultyInput ={dificultyInput}
                />

                <Button type='submit' buttonMessage='Add class' className='form-button' onClick={handleOnClickWrapper} />
            </div>
        </Layout>
    );
}
