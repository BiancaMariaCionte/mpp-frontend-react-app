import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { UserCard } from '../features/Display Users/UserCard';
import { MoveClass } from '../models/MoveClass';
import { BrowserRouter } from 'react-router-dom';


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


test('test user card rendering', () => {
    const testUser = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');
    const mockRemoveMethod = vi.fn();

    render(
        <BrowserRouter>
            <UserCard givenUser={testUser} removeMethod={mockRemoveMethod} />
        </BrowserRouter>,
    );

    const userCard = screen.getByTestId('user-card');
    const removeButton = screen.getByTestId('remove-button');

    const userId = screen.getByText('ID: 1');
    const userInstructorName = screen.getByText('Instructor Name: Kathleen Carm');
    const userType = screen.getByText('Type: dance class - Bada Lee, Smoker');
    const userYoutubeUrl = screen.getByText('Youtube Url: https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK');
    const userDificulty = screen.getByText('Dificulty: intermediate');
    

    expect(userCard).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(userId).toBeInTheDocument();
    expect(userInstructorName).toBeInTheDocument();
    expect(userType).toBeInTheDocument();
    expect(userYoutubeUrl).toBeInTheDocument();
    expect(userDificulty).toBeInTheDocument();
});

test('test user card remove method to be called', () => {
    const testUser = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');
    const mockRemoveMethod = vi.fn();

    render(
        <BrowserRouter>
            <UserCard givenUser={testUser} removeMethod={mockRemoveMethod} />
        </BrowserRouter>,
    );

    const userCard = screen.getByTestId('user-card');
    const removeButton = screen.getByTestId('remove-button');
    fireEvent.click(removeButton);
    fireEvent.click(userCard);

    expect(mockRemoveMethod.mock.calls.length).toBe(0);
    expect(mockedUseNavigate).toBeCalledWith('/editMoveClass/1');
});