import React from 'react';
import { Field, FormikProps } from 'formik';
import If from '../common/If';

import styles from './Input.module.scss'

interface Props {
    name: string;
    label: string;
    formik: FormikProps<any>;
}

function Input(props: Props) {
  
    const error = props.formik.errors[props.name];
    const { touched } = props.formik.getFieldMeta(props.name);

    return ( 
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <br />
            <Field id={props.name} name={props.name} /> 
            <If value={error && touched}>
                <span className={styles.errorLabel}>{error}</span>
            </If>
        </>
    );
}

export default Input;
