import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { UserForm } from '../features/CRUD Operations//UserForm';
import React from 'react';
import { MoveClass } from '../models/MoveClass'; 

test('testing rendering of user form without user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let instructorNameInput = React.createRef<HTMLInputElement>();
    let typeInput = React.createRef<HTMLInputElement>();
    let youtubeUrlInput = React.createRef<HTMLInputElement>();
    let dificultyInput = React.createRef<HTMLInputElement>();

    render(<UserForm idInput={idInput} instructorNameInput={instructorNameInput} typeInput={typeInput} youtubeUrlInput={youtubeUrlInput} dificultyInput={dificultyInput}/>);

    const renderedUserForm = screen.getByTestId('user-form');
    const idFormInput = screen.getByPlaceholderText('ID');
    const instructorNameFormInput = screen.getByPlaceholderText('Instructor Name');
    const typeFormLabel = screen.getByText('Type');
    const youtubeUrlFormLabel = screen.getByText('Youtube URL');
    const dificultyFormLabel = screen.getByText('Dificulty');

    expect(renderedUserForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(instructorNameFormInput).toBeInTheDocument();
    expect(typeFormLabel).toBeInTheDocument();
    expect(youtubeUrlFormLabel).toBeInTheDocument();
    expect(dificultyFormLabel).toBeInTheDocument();
});

test('testing rendering of user form with user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let instructorNameInput = React.createRef<HTMLInputElement>();
    let typeInput = React.createRef<HTMLInputElement>();
    let youtubeUrlInput = React.createRef<HTMLInputElement>();
    let dificultyInput = React.createRef<HTMLInputElement>();

    let demoUser = new MoveClass(1,'Kathleen Carm','dance class - Bada Lee, Smoker','https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK','intermediate');

    render(
        <UserForm
            idInput={idInput}
            instructorNameInput={instructorNameInput}
            typeInput={typeInput}
            youtubeUrlInput={youtubeUrlInput}
            dificultyInput={dificultyInput}
            givenUser={demoUser}
        />,
    );

    const renderedUserForm = screen.getByTestId('user-form');
    const idFormInput = screen.getByDisplayValue('1');
    const instructorNameFormInput = screen.getByDisplayValue('Kathleen Carm');
    const idFormLabel = screen.getByText('ID');
    const instructorNameFormLabel = screen.getByText('Instructor Name');

    expect(renderedUserForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(instructorNameFormInput).toBeInTheDocument();
    expect(idFormLabel).toBeInTheDocument();
    expect(instructorNameFormLabel).toBeInTheDocument();
});