import React from 'react'
import classes from "./MainHeader.module.css"
import Navigation from "./Navigation"
const MainHeader = (props) => {
  return (

    <header className={classes.main_header}>
        <h1>Login App</h1>
        <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout}/>
    </header>

  )
}

export default MainHeader