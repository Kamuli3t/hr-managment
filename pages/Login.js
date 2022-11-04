import React, { useState, useEffect, useReducer } from "react";

const emailReducer = (state, actions) => {
  if (actions.value.includes("@")) {
    return { value: actions.value, isValid: true };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, actions) => {
  if (actions.value.length > 6) {
    return { value: actions.value, isValid: true };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsToched, setFormIsToched] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_VALUE", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
  };

  useEffect(() => {
    if (emailState.isValid && passwordState.isValid) {
      setFormIsValid((prevForm) => (prevForm = !prevForm));
    }
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (event) => {
    event.preventDefault();

    setFormIsToched((prev) => {
      prev = !prev;
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">E-Mail </label>
          <input
            className={`${
              !emailState.isValid && formIsToched ? "bg-red-200" : ""
            } ml-3`}
            type="email"
            id="email"
            size="25"
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className="">
          <button
            className=" border-solid border-2 border-blue-500 px-2 py-1 font-semibold text-blue-500 rounded-md
             hover:bg-blue-500 hover:text-white transition-colors duration-300"
            type="submit"
            disabled={!formIsValid}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
