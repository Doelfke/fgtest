import React from 'react';

function Register() {
  return (
    <div>
      <h2>Let's</h2>
      <h1>Sign Up</h1>
      <p>
        Use the form below to sign up for this super awesome service.
        You're only a few steps away!
      </p>

      <div>
        <label htmlFor="firstName">
          First Name
          <input name="firstName" />
        </label>
        <label htmlFor="email">
          Email Address
          <input name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" />
        </label>
      </div>

      <button>Sign Up</button>
    </div>
  );
}

export default Register;
