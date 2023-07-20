import React from 'react'
import Card from "../UI/Card"

import classes from "./Home.module.css"

const Home = () => {
  return (
    <Card className={classes.home}>
   <h1>Welcome Back, User</h1>
    </Card>
  )
}

export default Home