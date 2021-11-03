import React from 'react';

import styles from './Modal.module.scss'

// This isn't a real modal

interface Props {
  children: React.ReactNode
}

function Modal(props: Props) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBody}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
