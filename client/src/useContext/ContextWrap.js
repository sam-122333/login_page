import contextCell from "./contextCell";
import { useState } from "react";

const ContextWrap = (props) => {
  const pageName = "Home Page";

  //login page

  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  const handleLoginInputs = (e) => {
    setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
  };
  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = loginUserData;
  //   const response = await fetch("http://localhost:4000/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   console.log(response);

  //   if (response.status === 400 || response.status === 402 || !response) {
  //     window.alert("Something went wrong");
  //     console.log("login failed");
  //   } else {
  //     window.alert("login successfully");
  //     console.log("login successfully");
  //   }
  // };

  // Register page context

  const [regUserData, setRegUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleRegInputs = (e) => {
    setRegUserData({ ...regUserData, [e.target.name]: e.target.value });
  };

  return (
    <contextCell.Provider
      value={{
        pageName,
        regUserData,
        loginUserData,
        handleRegInputs,
        handleLoginInputs,
        setRegUserData,
      }}
    >
      {props.children}
    </contextCell.Provider>
  );
};

export default ContextWrap;
