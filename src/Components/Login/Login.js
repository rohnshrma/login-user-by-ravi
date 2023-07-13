import { useState, useEffect } from "react";
import classes from "./Login.module.css";

const Login = props => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6)
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const validateEmailHandler = () => {
    console.log("email blur");
    setEmailIsValid(
      enteredEmail.includes("@") && enteredEmail.endsWith(".com")
    );
  };
  const validatePasswordHandler = () => {
    console.log("password blur");
    setPasswordIsValid(enteredPassword.length >= 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin({ enteredEmail, enteredPassword })
  }

  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${!emailIsValid ? "invalid" : ""}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            onBlur={validateEmailHandler}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${!passwordIsValid ? "invalid" : ""}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={classes.actions}>
          <button disabled={!formIsValid} type="submit" className={classes.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
