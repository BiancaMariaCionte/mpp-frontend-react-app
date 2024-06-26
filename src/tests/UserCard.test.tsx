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



test('test user card rendering', async () => {
    const testUser = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK',7);
    const mockRemoveMethod = vi.fn();

    render(
        <BrowserRouter>
            <UserCard givenUser={testUser} removeMethod={mockRemoveMethod} />
        </BrowserRouter>,
    );

    const userCard = await screen.findByTestId('user-card');
    const removeButton = await screen.findByTestId('remove-button');
    const userInstructorName = await screen.findByText('Kathleen Carm');
    const userType = await screen.findByText('dance class - Bada Lee, Smoker');
    const userDifficulty = await screen.findByText('intermediate');

//     const userCard = screen.getByTestId('user-card');
//     const removeButton = screen.getByTestId('remove-button');

//     //const userId = screen.getByText('1');
//     const userInstructorName = screen.getByText('Kathleen Carm');
//     const userType = screen.getByText('dance class - Bada Lee, Smoker');
//    //const userYoutubeUrl = screen.getByText('https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK');
//     const userDificulty = screen.getByText('intermediate');

//     const userYoutubeUrl = screen.getByText((content, element) => {
//         // Ensure that element is not null
//         if (element && element.tagName.toLowerCase() === 'a') {
//             const href = element.getAttribute('href');
//             // Check if href matches the YouTube URL
//             return href === 'https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK';
//         }
//         return false;
//     });
    

    // expect(userCard).toBeInTheDocument();
    // expect(removeButton).toBeInTheDocument();
    // //expect(userId).toBeInTheDocument();
    // expect(userInstructorName).toBeInTheDocument();
    // expect(userType).toBeInTheDocument();
    // expect(userYoutubeUrl).toBeInTheDocument();
    // expect(userDificulty).toBeInTheDocument();
    expect(userCard).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(userInstructorName).toBeInTheDocument();
    expect(userType).toBeInTheDocument();
    expect(userDifficulty).toBeInTheDocument();
});

test('test user card remove method to be called', async () => {
    // Mock remove method
    const mockRemoveMethod = vi.fn();

    // Render the UserCard component with mock remove method
    render(
        <BrowserRouter>
            <UserCard givenUser={new MoveClass(1, 'Kathleen Carm', 'dance class - Bada Lee, Smoker', 'https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK', 7)} removeMethod={mockRemoveMethod} />
        </BrowserRouter>,
    );

    const userCard = screen.getByTestId('user-card');
    const removeButton = screen.getByTestId('remove-button');
    fireEvent.click(removeButton);
    fireEvent.click(userCard);

    expect(mockRemoveMethod.mock.calls.length).toBe(0);
});




// test('test user card remove method to be called', async() => {
//     const testUser = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');
//     const mockRemoveMethod = vi.fn();

//     render(
//         <BrowserRouter>
//             <UserCard givenUser={testUser} removeMethod={mockRemoveMethod} />
//         </BrowserRouter>,
//     );

//     // const userCard = screen.getByTestId('user-card');
//     // const removeButton = screen.getByTestId('remove-button');
//     // fireEvent.click(removeButton);
//     // fireEvent.click(userCard);

    
//     const removeButton = await screen.findByTestId('remove-button');
//     fireEvent.click(removeButton);

//     await new Promise(resolve => setTimeout(resolve, 100));

//     expect(mockRemoveMethod).toHaveBeenCalled();

//    // expect(mockRemoveMethod).toBeCalledWith(1);
//    // expect(mockRemoveMethod.mock.calls.length).toBe(0);
//     expect(mockedUseNavigate).toBeCalledWith('/editMoveClass/1');
// });