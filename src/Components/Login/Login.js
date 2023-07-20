import { useState, useReducer, useEffect } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card"



const emailReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.includes("@")
    }
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value, isValid: state.value.includes("@")
    }
  }



  return {
    value: "",
    isValid: false
  }
}
const passwordReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.trim().length > 6
    }
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value, isValid: state.value.trim().length > 6
    }
  }
  return {
    value: "",
    isValid: false
  }
}



const Login = props => {

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null
  })



  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(emailState.isValid && passwordState.isValid)
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", payload: e.target.value })
  };
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", payload: e.target.value })

  };
  const validateEmailHandler = () => {
    console.log("email blur");
    dispatchEmail({ type: "INPUT_BLUR" })
  };
  const validatePasswordHandler = () => {
    console.log("password blur");
    dispatchPassword({ type: "INPUT_BLUR" })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin({
      email: emailState.value,
      password: passwordState.value
    })
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${!emailState.isValid ? "invalid" : ""}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            onBlur={validateEmailHandler}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${!passwordState.isValid ? "invalid" : ""}`}
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
    </Card>
  );
};
export default Login;
