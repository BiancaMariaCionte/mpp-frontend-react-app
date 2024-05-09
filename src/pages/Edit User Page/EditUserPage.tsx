import {UsersContext} from '../../contexts/UsersContext';
import {UserForm} from '../../features/CRUD Operations/UserForm';
import {Layout} from '../../components/layout/Layout';
import {Button} from '../../components/button/Button';
import {MoveClass} from '../../models/MoveClass';

import {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Avatar} from '@mui/material';
import {
    getMoveClassById,
    updateMoveClass,
} from '../../services/MoveClassService';
import LoadingPage from '../Loading Page/LoadingPage';
import {UserDataType} from '../../types/UserDataType';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    instructorNameInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    youtubeUrlInput: React.RefObject<HTMLInputElement>,
    dificultyInput: React.RefObject<HTMLInputElement>,
) {
    if (
        !idInput.current ||
        !instructorNameInput.current ||
        !typeInput.current ||
        !youtubeUrlInput.current ||
        !dificultyInput.current
    )
        throw new Error('Inputs references are null');

    if (
        !idInput.current.value ||
        !instructorNameInput.current.value ||
        !typeInput.current.value ||
        !youtubeUrlInput.current.value ||
        !dificultyInput.current.value
    )
        throw new Error('You must provide values for each field!');

    const userId: number = parseInt(idInput.current.value),
        userInstructorName: string = instructorNameInput.current.value,
        userType: string = typeInput.current.value,
        userYoutubeUrl: string = youtubeUrlInput.current.value,
        userDificulty: number = parseInt(dificultyInput.current.value);

    return new MoveClass(
        userId,
        userInstructorName,
        userType,
        userYoutubeUrl,
        userDificulty,
    );
}

export function EditUserPage() {
    document.title = 'Edit Class';

    const idInput = useRef<HTMLInputElement>(null);
    const instructorNameInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const youtubeUrlInput = useRef<HTMLInputElement>(null);
    const difficultyInput = useRef<HTMLInputElement>(null);

    let [isLoading, setIsLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const usersContext = useContext(UsersContext)!;

    const {userId} = useParams();
    if (!userId) {
        navigate('/');
        return;
    }

    let [givenUser, setGivenUser] = useState<MoveClass>();
    //const givenUser = usersContext.moveClasses.find((user: MoveClass) => user.getId() === parseInt(userId));

    useEffect(() => {
        getMoveClassById(userId!).then((foundUser: MoveClass) => {
            setGivenUser(foundUser);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (isLoading) return;
        if (!givenUser) navigate('/');
    });

    const handleOnClickWrapper = () => {
        try {
            // const newUser = handleOnClick(idInput, instructorNameInput, typeInput, youtubeUrlInput, dificultyInput);
            // usersContext.removeMoveClass(newUser.getId());
            // usersContext.addMoveClass(newUser);

            // navigate('/');
            // const newUser: MoveClass = handleOnClick(idInput!, instructorNameInput, typeInput, youtubeUrlInput, difficulty);
            const newUser: MoveClass = handleOnClick(
                idInput,
                instructorNameInput,
                typeInput,
                youtubeUrlInput,
                difficultyInput,
            );

            const userToUpdate: UserDataType = {
                id: newUser.getId(),
                instructorName: newUser.getInstructorName(),
                type: newUser.getType(),
                youtubeUrl: newUser.getYoutubeUrl(),
                difficulty: newUser.getDificulty(),
            };
            updateMoveClass(userToUpdate).then(() => navigate('/'));
        } catch (error) {
            alert(error);
        }
    };

    if (isLoading) return <LoadingPage />;

    return (
        <Layout>
            <div className='main-page-container'>
                <UserForm
                    idInput={idInput}
                    instructorNameInput={instructorNameInput}
                    typeInput={typeInput}
                    youtubeUrlInput={youtubeUrlInput}
                    dificultyInput={difficultyInput}
                    givenUser={givenUser}
                />

                <Button
                    type='submit'
                    buttonMessage='Edit Class'
                    onClick={handleOnClickWrapper}
                />
            </div>
        </Layout>
    );
}

export default EditUserPage;
