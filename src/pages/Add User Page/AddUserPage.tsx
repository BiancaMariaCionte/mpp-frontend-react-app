import {UserForm} from '../../features/CRUD Operations/UserForm';
import {Layout} from '../../components/layout/Layout';
import {Button} from '../../components/button/Button';
import {MoveClass} from '../../models/MoveClass';

import {useRef, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {UsersContext} from '../../contexts/UsersContext';

import './AddUserPage.css';
import {addMoveClass} from '../../services/MoveClassService';
import {UserDataType} from '../../types/UserDataType';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    instructorNameInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    youtubeUrlInput: React.RefObject<HTMLInputElement>,
    dificultyInput: React.RefObject<HTMLInputElement>,
): UserDataType {
    if (
        !idInput.current ||
        !instructorNameInput.current ||
        !typeInput.current ||
        !youtubeUrlInput.current ||
        !dificultyInput.current
    )
        throw new Error('Inputs references are null');

    // we can access the current value of that ref through the "ref.current" property
    // the value is mutable
    if (
        //validate that all input fields have values
        !idInput.current.value ||
        !instructorNameInput.current.value ||
        !typeInput.current.value ||
        !youtubeUrlInput.current.value ||
        !dificultyInput.current.value
    )
        throw new Error('You must provide values for each field!');

    // extract the values from the input fields
    const id: number = parseInt(idInput.current!.value),
        instructorName: string = instructorNameInput.current!.value,
        type: string = typeInput.current!.value,
        youtubeUrl: string = youtubeUrlInput.current!.value,
        difficulty: number = parseInt(dificultyInput.current!.value);

    //return new MoveClass(userId, userInstructorName, userType, userYoutubeUrl,userDificulty);
    return {
        id,
        instructorName,
        type,
        youtubeUrl,
        difficulty,
    };
}

export function AddUserPage() {
    document.title = 'Add class';

    const idInput = useRef<HTMLInputElement>(null);
    const instructorNameInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const youtubeUrlInput = useRef<HTMLInputElement>(null);
    const dificultyInput = useRef<HTMLInputElement>(null);

    // Refs provide a way to access and interact with DOM elements directly
    // Refs are particularly useful when you need to imperatively modify a DOM element or access its properties

    const navigate = useNavigate();
    //const usersContext = useContext(UsersContext)!;
    //  you can only call a Hook immediately inside a React component (not inside loops or conditions)

    const handleOnClickWrapper = () => {
        //after we press the button Add class we return one page back (to the main page)
        try {
            const inputUser = handleOnClick(
                idInput,
                instructorNameInput,
                typeInput,
                youtubeUrlInput,
                dificultyInput,
            );
            //usersContext.addMoveClass(inputUser);
            addMoveClass(inputUser).then(() => navigate('/'));
            navigate('/'); //because of this
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Layout>
            <div
                className='main-page-container'
                data-testid='main-page-container'
            >
                <div className='main-title'>Add user</div>

                <UserForm
                    // The refs are passed to the UserForm component to enable the form fields to interact with the input values directly
                    idInput={idInput}
                    instructorNameInput={instructorNameInput}
                    typeInput={typeInput}
                    youtubeUrlInput={youtubeUrlInput}
                    dificultyInput={dificultyInput}
                />

                <Button
                    type='submit'
                    buttonMessage='Add class'
                    className='form-button'
                    onClick={handleOnClickWrapper}
                />
            </div>
        </Layout>
    );
}

export default AddUserPage;
