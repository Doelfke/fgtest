import React from 'react';
import { Formik, FormikProps } from 'formik';
import { FormikValidatorBase, IsEmail, IsNotEmpty, IsString, MinLength } from 'formik-class-validator';
import Input from '../form/Input';
import { useHistory } from 'react-router';
import FormFooter from '../form/FormFooter';
import Button from '../form/Button';

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

  const history = useHistory();

  const submit = (values: RegisterFormModel) => {
    return Promise.resolve().then(() => {
      window.localStorage.setItem('firstName', values.firstName);
      window.localStorage.setItem('email', values.email);
      history.push("/success");
    });
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

            <FormFooter>
              <Button onClick={()=>formik.handleSubmit()} disabled={!formik.isValid || formik.isSubmitting}>Sign Up</Button>
            </FormFooter>
          </>
        )}
       </Formik>
      
    </div>
  );
}

export default Register;
