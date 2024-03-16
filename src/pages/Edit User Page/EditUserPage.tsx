import { UsersContext } from '../../contexts/UsersContext';
import { UserForm } from '../../features/CRUD Operations/UserForm';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/button/Button';
import { MoveClass } from '../../models/MoveClass';

import { useContext, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    instructorNameInput: React.RefObject<HTMLInputElement>,
    typeInput: React.RefObject<HTMLInputElement>,
    youtubeUrlInput: React.RefObject<HTMLInputElement>,
    dificultyInput: React.RefObject<HTMLInputElement>,
) {
    if (!idInput.current || !instructorNameInput.current || !typeInput.current || !youtubeUrlInput.current || !dificultyInput.current)
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
        userDificulty: string = dificultyInput.current.value;

    return new MoveClass(userId, userInstructorName, userType, userYoutubeUrl, userDificulty);
}

export function EditUserPage() {
    document.title = 'Edit Class';

    const idInput = useRef<HTMLInputElement>(null);
    const instructorNameInput = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLInputElement>(null);
    const youtubeUrlInput = useRef<HTMLInputElement>(null);
    const dificultyInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const usersContext = useContext(UsersContext)!;

    const { userId } = useParams();
    if (!userId) {
        navigate('/');
        return;
    }

    const givenUser = usersContext.users.find((user: MoveClass) => user.getId() === parseInt(userId));
    const handleOnClickWrapper = () => {
        try {
            const newUser = handleOnClick(idInput, instructorNameInput, typeInput, youtubeUrlInput, dificultyInput);
            usersContext.removeUser(newUser.getId());
            usersContext.addUser(newUser);

            navigate('/');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Layout>
            <div className='main-page-container'>
                <UserForm
                    idInput={idInput}
                    instructorNameInput={instructorNameInput}
                    typeInput={typeInput}
                    youtubeUrlInput={youtubeUrlInput}
                    dificultyInput={dificultyInput}
                    givenUser={givenUser}
                />

                <Button type='submit' buttonMessage='Edit Class' onClick={handleOnClickWrapper} />
            </div>
        </Layout>
    );
}
