import { forwardRef } from 'react';

import { FormEntryProps } from '../../types/FormEntryProps.types'; 

import './FormEntry.css';

//  <HTMLInputElement> specifies the type of the ref that will be forwarded. In this case, it's a ref to an HTML input element
// <FormEntryProps> specifies the type of props that FormEntry accepts.

const FormEntry = forwardRef<HTMLInputElement, FormEntryProps>((props, ref) => {
    return (
        <div className='form-entry' data-testid='form-entry'>
            <label className='form-label' htmlFor={props.label}>
                {props.label}
            </label>
            {props.defaultValue === '' ? ( //for add
                <input
                    data-testid='form-entry-input'
                    type='text'
                    className='form-input'
                    id={props.label}
                    placeholder={props.placeHolder}
                    disabled={props.disabled}
                    ref={ref}
                />
            ) : (
                <input
                    data-testid='form-entry-input'
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

