import React from "react";
import UserForm from "./FormContainer";

const RegisterForm = () => {
  return (
    <section className={"reg-container"} id="registerForm">
      <div>
        <h1 className={"reg-header"}>Register to get a work</h1>
        <p className={"reg-text"}>
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
        <UserForm />
      </div>
    </section>
  );
};

export default RegisterForm;
