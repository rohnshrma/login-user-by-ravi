import { Fragment, useEffect, useState } from "react";
import "./styles.css";

import Login from "./Components/Login/Login";
import MainHeader from "./Components/Header/MainHeader";
export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState();


  useEffect(() => {

    console.log("re rendering");

    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn") // 1
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true)
    }

  }, [])



  const logiHandler = (userInfo) => {
    console.log(userInfo);
    localStorage.setItem("isLoggedIn", 1)
    setIsLoggedIn(true)
  }
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  return (
    <Fragment>
      <MainHeader onLogout={logoutHandler} isLoggedIn={isLoggedIn} />
      <Login onLogin={logiHandler} />
    </Fragment>
  );
}
