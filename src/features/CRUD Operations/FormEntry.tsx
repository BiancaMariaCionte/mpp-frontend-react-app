import { forwardRef } from 'react';

import { FormEntryProps } from '../../types/FormEntryProps.types';

import './FormEntry.css';

//  <HTMLInputElement> specifies the type of the ref that will be forwarded. In this case, it's a ref to an HTML input element
// <FormEntryProps> specifies the type of props that FormEntry accepts.
const FormEntry = forwardRef<HTMLInputElement, FormEntryProps>((props, ref) => {
    return (
        <div className='form-entry'>
            <label className='form-label'>{props.label}</label>
            {props.defaultValue === '' ? ( //for add
                <input
                    type='text'
                    className='form-input'
                    placeholder={props.placeHolder} //When the input field is empty, the placeholder text is displayed inside the input field as a grayed-out text
                    disabled={props.disabled} //The disabled attribute, when set to true, disables the input field, preventing users from interacting with it. Used for the ID field
                    ref={ref}
                />
            ) : ( // for edit
                <input
                    type='text'
                    className='form-input'
                    placeholder={props.defaultValue}
                    defaultValue={props.defaultValue}
                    disabled={props.disabled}
                    ref={ref}
                />
            )}
        </div>
    );
});

export { FormEntry };

// forewardRef <- useful when you need to access the DOM element or React component instance created by a child component directly from the parent component
