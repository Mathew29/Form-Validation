import React, { useState, useEffect } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordCheck: "",
};

const RegisterForm = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (formState.password !== formState.passwordCheck)
      return console.log("passwords do not match");

    console.log(formState);
    setFormState(initialState);
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name..."
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name..."
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="passwordCheck"
          placeholder="Check Password"
          onChange={handleInputChange}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default RegisterForm;
