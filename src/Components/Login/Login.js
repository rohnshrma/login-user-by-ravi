import React, { useState } from 'react'


const Login = () => {

    const [enteredEmail,setEnteredEmail] = useState("")
    const [emailIsValid,setEmailIsValid] = useState(true)

    const [enteredPassword,setEnteredPassword] = useState("")
    const [passwordIsValid,setPasswordIsValid] = useState(true)


    const emailChangeHandler = (e)=>{
        const emailInput = e.target.value
        setEnteredEmail(emailInput)
    }
    const passwordChangeHandler = (e)=>{
        
        const passwordInput = e.target.value
        setEnteredPassword(passwordInput)
    }

  return (
    <div className='Login'>
        <form>
            <div className="form-group">
                <input type="email" onChange={emailChangeHandler} className='form-control' placeholder='What is Your Email ?'/>
            </div>
            <div className="form-group">
                <input type="password" onChange={passwordChangeHandler}  className='form-control' placeholder='What is Your Password ?'/>
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login