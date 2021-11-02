import React, { MouseEventHandler } from 'react';

import styles from './Button.module.scss'

interface Props {
    type?: 'submit' | 'button';
    function?: 'primary';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children: React.ReactNode;
}

function Button(props: Props) {

    const type = props.type || 'submit';
    const fn = props.function || 'primary';

    let classes = styles.button + ' ';
    if (fn === 'primary') {
        classes += styles.buttonPrimary + ' ';
    }
    if (props.disabled === true) {
        classes += styles.buttonDisabled + ' ';
    }

    return ( 
            <button type={type} 
                    disabled={props.disabled}
                    onClick={props.onClick}
                    className={classes}>
                        {props.children}
            </button>
    );
}

export default Button;
