import React from 'react'

import classes from "./Navigation.module.css"

const Navigation = (props) => {


    const {isLoggedIn,onLogout } = props

    return (
        <nav className={classes.nav}>
            <ul>
                {isLoggedIn && <li>User</li>}
                {isLoggedIn && <li>Admin</li>}
                {isLoggedIn && <li>
                    <button onClick={onLogout}>Logout</button>
                </li>}


            </ul>
        </nav>
    )
}

export default Navigation