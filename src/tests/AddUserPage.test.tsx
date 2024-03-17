import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { AddUserPage } from '../pages/Add User Page/AddUserPage';
import { BrowserRouter } from 'react-router-dom';
import { UsersContextProvider } from '../contexts/UsersContext';


// mocking <-  create a "fake" version of an internal — or external — service

// vi.hoisted() <- returns the value that was returned from the factory. 
// You can use that value in your vi.mock factories if you need easy access to locally defined variables

// vi.mock works only for modules that were imported with the import keyword
const { mockedUseNavigate } = vi.hoisted(() => {
    // vi.hoisted() <- allows you to create hoisted variables or functions that can be used across multiple test cases
    // hoisted variables <- are processed before the code is executed
    return { //ensures that mockedUseNavigate is accessible outside the hoisted function
        mockedUseNavigate: vi.fn(), //returns an object containing a mocked function called mockedUseNavigate
    };
});

vi.mock('react-router-dom', async () => {
    const router = await vi.importActual<typeof import('react-router-dom')>('react-router-dom'); //imports the actual 'react-router-dom' module
    return {
        ...router,
        useNavigate: () => mockedUseNavigate, //overrides the useNavigate hook with mockedUseNavigate
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

    expect(mainPageContainer).toBeInTheDocument(); //check if the main page container and the add user button are present in the rendered component
    expect(addUserButton).toBeInTheDocument();
});

test('test add user page add button without form data', () => {
    window.alert = vi.fn();//prevent actual alerts from appearing during the test.

    render(
        <BrowserRouter>
            <AddUserPage />
        </BrowserRouter>,
    );

    const addUserButton = screen.getByTestId('button-test-id');

    fireEvent.click(addUserButton); //used to simulate a click event on the add user button

    expect(mockedUseNavigate.mock.calls.length).toBe(0);
});

test('test add user page add button with form data', () => {
    window.alert = vi.fn();

    render(
        <UsersContextProvider
            userContext={{
                moveClasses: [],
                addMoveClass: vi.fn(),
                removeMoveClass: vi.fn(),
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


    fireEvent.change(idFormInput, { // simulate changes in the input field values
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