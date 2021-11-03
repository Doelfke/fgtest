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
            <label htmlFor={props.name} className={styles.label}>{props.label}</label>
            <Field id={props.name} name={props.name} className={styles.input} /> 
            <If value={error && touched}>
                <span className={styles.errorLabel}>{error}</span>
            </If>
        </>
    );
}

export default Input;
