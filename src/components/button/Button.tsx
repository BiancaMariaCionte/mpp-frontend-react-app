import './Button.css';

import { ButtonProps } from '../../types/ButtonProps.types'; 
import MyButtonStyled from '../../styles/styles-button';

export function Button(props: ButtonProps) {
    return (
        
        <MyButtonStyled
            type={props.type}
            className={'button' + ' ' + (props.className ? props.className : '')}
            // the button always has the 'button' class applied to it, regardless of whether additional classes are provided through the className prop.
            onClick={props.onClick}
            data-testid='button-test-id'
        >
            {props.buttonMessage} {/* What is written on the button */}
        </MyButtonStyled>
    );
}

// We have a Button that takes as an argument a prop of type ButtonProps.
// This means that all the buttons that we will create will have the attributes of the ButtonProps i.e:
// type, className (for css styling), onClick (the function that says what the button does), message (what is written on the button)
