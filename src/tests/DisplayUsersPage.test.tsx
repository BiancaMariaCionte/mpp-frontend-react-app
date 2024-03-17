import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test, vi } from 'vitest';
import { DisplayUsersPage } from '../pages/Display Data Page/DisplayUsersPage';
import { UsersContextProvider } from '../contexts/UsersContext';
import { MoveClass } from '../models/MoveClass';


test('test display users page render', () => {
    render(
        <UsersContextProvider
            userContext={{
                users: [new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate')],
                addUser: vi.fn(),
                removeUser: vi.fn(),
            }}
        >
            <BrowserRouter>
                <DisplayUsersPage />
            </BrowserRouter>
        </UsersContextProvider>,
    );

    const usersListDiv = screen.getByTestId('users-list');

    expect(usersListDiv.childNodes.length).toBe(1);
});