import React from 'react';
import { Formik, FormikProps } from 'formik';
import { FormikValidatorBase, IsEmail, IsNotEmpty, IsString, MinLength } from 'formik-class-validator';
import Input from '../../form/Input';

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

  const submit = (values: RegisterFormModel) => {
    console.log('submitting', values);
    return Promise.resolve();
  }

  return (
    <div>
      <h2>Let's</h2>
      <h1>Sign Up</h1>
      <p>
        Use the form below to sign up for this super awesome service.
        You're only a few steps away!
      </p>

      <Formik initialValues={new RegisterFormModel()} onSubmit={submit} validate={RegisterFormModel.createValidator()} validateOnMount={true}>
         {(formik: FormikProps<RegisterFormModel>) => (
          <>
            <Input name="firstName" label="First Name" formik={formik} />
            <br /> <br />

            <Input name="email" label="Email Address" formik={formik} />
            <br /> <br />

            <Input name="password" label="Password" formik={formik} />
            <br /> <br />

            <button type="submit" onClick={()=>formik.handleSubmit()} disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </>
        )}
       </Formik>
      
    </div>
  );
}

export default Register;
