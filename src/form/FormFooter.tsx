import React from 'react';

import styles from './FormFooter.module.scss';

interface Props {
    children: React.ReactNode
}

function FormFooter(props: Props) {
    return ( 
        <div className={styles.formFooter}>
            { props.children }
        </div>
    )
}

export default FormFooter;
