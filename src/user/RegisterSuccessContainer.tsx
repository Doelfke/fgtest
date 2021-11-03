import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../common/Modal';
import RegisterSuccess from './RegisterSuccess';

// Handle state and data fetching here

function RegisterSuccessContainer() {

  const history = useHistory();
  
  const firstName = window.localStorage.getItem('firstName');
  const email = window.localStorage.getItem('email');

  if (!firstName || !email) {
    history.push('/');

    return <></>;
  }

  return (
      <Modal>
          <RegisterSuccess firstName={firstName} email={email} />
      </Modal>
  );
}

export default RegisterSuccessContainer;
