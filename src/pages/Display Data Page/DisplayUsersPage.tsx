import { useContext } from 'react';

import { MoveClass } from '../../models/MoveClass'; 
import { UserCard } from '../../features/Display Users/UserCard';
import { Layout } from '../../components/layout/Layout';
import { UsersContext } from '../../contexts/UsersContext';

import './DisplayUsersPage.css';

export function DisplayUsersPage() {
    document.title = 'ChoreoVerse';

    const usersContext = useContext(UsersContext)!;

    let usersArray: MoveClass[] = usersContext.users;
    const removeMethod = usersContext.removeUser;

    return (
        <Layout>
            <div className='main-page-container' data-testid='main-page-container'>
                <div className='users-list' data-testid='users-list'>
                    {usersArray.map((user) => (
                        <UserCard givenUser={user} removeMethod={removeMethod} key={user.getId()} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
