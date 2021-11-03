import React from 'react';
import Button from '../form/Button';
import FormFooter from '../form/FormFooter';


interface Props {
  firstName: string;
  email: string;
}

function RegisterSuccess(props: Props) {
  return (
    <div>
      <h2>Welcome,</h2>
      <h1>{props.firstName}!</h1>
      <p>
        You have been registered for this awesome service.
        Please check your email listed below for instructions.
      </p>
      <p>
        {props.email}
      </p>    
      <FormFooter>
        <Button>Sign In</Button>
      </FormFooter>

    </div>
  );
}

export default RegisterSuccess;
