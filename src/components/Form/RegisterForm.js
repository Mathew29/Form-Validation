import React, { useState, useEffect } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password, passwordCheck);
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name..."
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name..."
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <input
          type="password"
          name="passwordCheck"
          placeholder="Check Password"
          onChange={(event) => setPasswordCheck(event.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default RegisterForm;
