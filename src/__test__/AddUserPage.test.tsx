import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { AddUserPage } from '../pages/Add User Page/AddUserPage';
import { BrowserRouter } from 'react-router-dom';
import { UsersContextProvider } from '../contexts/UsersContext';

const { mockedUseNavigate } = vi.hoisted(() => {
    return {
        mockedUseNavigate: vi.fn(),
    };
});

vi.mock('react-router-dom', async () => {
    const router = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
    return {
        ...router,
        useNavigate: () => mockedUseNavigate,
    };
});

test('test add user page rendering', () => {
    render(
        <BrowserRouter>
            <AddUserPage />
        </BrowserRouter>,
    );

    const mainPageContainer = screen.getByTestId('main-page-container');
    const addUserButton = screen.getByTestId('button-test-id');

    expect(mainPageContainer).toBeInTheDocument();
    expect(addUserButton).toBeInTheDocument();
});

test('test add user page add button without form data', () => {
    window.alert = vi.fn();

    render(
        <BrowserRouter>
            <AddUserPage />
        </BrowserRouter>,
    );

    const addUserButton = screen.getByTestId('button-test-id');

    fireEvent.click(addUserButton);

    expect(mockedUseNavigate.mock.calls.length).toBe(0);
});

test('test add user page add button with form data', () => {
    window.alert = vi.fn();

    render(
        <UsersContextProvider
            userContext={{
                users: [],
                addUser: vi.fn(),
                removeUser: vi.fn(),
            }}
        >
            <BrowserRouter>
                <AddUserPage />
            </BrowserRouter>
        </UsersContextProvider>,
    );

    const addUserButton = screen.getByTestId('button-test-id');

    const idFormInput = screen.getByLabelText('ID');
    const instructorNameFormInput = screen.getByLabelText('Instructor Name');
    const typeFormInput = screen.getByLabelText('Type');
    const youtubeUrlFormInput = screen.getByLabelText('Youtube URL');
    const dificultyFormInput = screen.getByLabelText('Dificulty');


    fireEvent.change(idFormInput, {
        target: {
            value: '1',
        },
    });
    fireEvent.change(instructorNameFormInput, {
        target: {
            value: 'Kathleen Carm',
        },
    });
    fireEvent.change(typeFormInput, {
        target: {
            value: 'dance class - Bada Lee, Smoker',
        },
    });
    fireEvent.change(youtubeUrlFormInput, {
        target: {
            value: 'https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK',
        },
    });

    fireEvent.change(dificultyFormInput, {
        target: {
            value: 'intermediate',
        },
    });

    fireEvent.click(addUserButton);

    expect(mockedUseNavigate).toBeCalledWith('/');
});