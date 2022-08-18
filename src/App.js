import React from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [valid, setValid] = React.useState(false)

  const handleFirstNameInput = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInput = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInput = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }


  
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null }
        <input
          onChange={handleFirstNameInput}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null } 
        <input
          onChange={handleLastNameInput}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null } 
        <input
          onChange={handleEmailInput}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
         {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
