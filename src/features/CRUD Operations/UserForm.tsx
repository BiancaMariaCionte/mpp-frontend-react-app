import { UserFormType } from '../../types/UserFormProps.types';
import { FormEntry } from './FormEntry';

import './UserForm.css';



export function UserForm(props: UserFormType) {
    const formEntries = [
        { label: 'ID', ref: props.idInput, placeHolder: 'ID', defaultValue: '', disabled: false },
        {
            label: 'Instructor Name',
            ref: props.instructorNameInput,
            placeHolder: 'Instructor Name',
            defaultValue: '',
            disabled: false,
        },
        { label: 'Type', ref: props.typeInput, placeHolder: 'Type', defaultValue: '', disabled: false },
        { label: 'Youtube URL', ref: props.youtubeUrlInput, placeHolder: 'Youtube URL', defaultValue: '', disabled: false },
        { label: 'Dificulty', ref: props.dificultyInput, placeHolder: 'Dificulty', defaultValue: '', disabled: false },
    ];

    if (props.givenUser !== undefined) {
        formEntries[0].disabled = true;

        formEntries[0].defaultValue = props.givenUser.getId().toString();
        formEntries[1].defaultValue = props.givenUser.getInstructorName();
        formEntries[2].defaultValue = props.givenUser.getType();
        formEntries[3].defaultValue = props.givenUser.getYoutubeUrl();
        formEntries[4].defaultValue = props.givenUser.getDificulty().toString();
    }

    return (
        <div className='form-div' data-testid='user-form'>
            <form className='user-form'>
                {formEntries.map((entry) => (
                    <FormEntry
                        key={entry.label}
                        ref={entry.ref}
                        label={entry.placeHolder}
                        placeHolder={entry.placeHolder}
                        defaultValue={entry.defaultValue}
                        disabled={entry.disabled}
                    />
                ))}
            </form>
        </div>
    );
}
