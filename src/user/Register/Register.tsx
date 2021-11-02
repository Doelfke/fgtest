import React from 'react';
import { Field, Formik, FormikProps } from 'formik';
import { FormikValidatorBase, IsEmail, IsNotEmpty, IsString, MinLength } from 'formik-class-validator';

class RegisterFormModel extends FormikValidatorBase {
  @IsNotEmpty({message: 'Required'})
  @IsString({message: 'Required'})
  @MinLength(2,{message: 'Required'})
  firstName: string = '';

  @IsNotEmpty({message: 'Required'})
  @IsString({message: 'Required'})
  @IsEmail({},{message:'Invalid'})
  email: string = '';
  
  @IsNotEmpty()
  @IsNotEmpty({message: 'Required'})
  @IsString({message: 'Required'})
  @MinLength(5,{message: 'Too Short'})
  password: string = '';
}

function Register() {

  const handleSubmit = (values: RegisterFormModel) => {
    console.log('submitting', values);
  }

  return (
    <div>
      <h2>Let's</h2>
      <h1>Sign Up</h1>
      <p>
        Use the form below to sign up for this super awesome service.
        You're only a few steps away!
      </p>

      <Formik initialValues={new RegisterFormModel()} onSubmit={handleSubmit} validate={RegisterFormModel.createValidator()} validateOnMount={true}>
         {(formik: FormikProps<RegisterFormModel>) => (
          <>
            <label htmlFor="firstName">First Name</label>
            <br />
            <Field id="firstName" name="firstName" />

            <br /> <br />

            <label htmlFor="email">Email Address</label>
            <br />
            <Field id="email" name="email" />

            <br /> <br />

            <label htmlFor="password">Password</label>
            <br />
            <Field id="password" name="password" />

            <br /> <br />

            <button type="submit" onClick={()=>formik.handleSubmit()} disabled={!formik.isValid}>Submit</button>
          </>
        )}
       </Formik>
      
    </div>
  );
}

export default Register;
