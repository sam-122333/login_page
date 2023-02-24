import contextCell from "./contextCell";
import { useState } from "react";

const ContextWrap = (props) => {
  const [pageName, setPageName] = useState("");

  // Register page

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

  //login page

  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  const handleLoginInputs = (e) => {
    setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
  };

  // about page

  const [aboutUserData, setAboutUserData] = useState({});

  //contact page

  const [contactUserData, setContactUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleContactInputs = (e) => {
    setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
  };

  //login toggle
  const [toggleLogin, setToggleLogin] = useState(
    localStorage.getItem("login") === "true"
  );

  return (
    <contextCell.Provider
      value={{
        pageName,
        regUserData,
        loginUserData,
        aboutUserData,
        contactUserData,
        toggleLogin,
        setPageName,
        handleRegInputs,
        handleLoginInputs,
        setRegUserData,
        setAboutUserData,
        setContactUserData,
        handleContactInputs,
        setToggleLogin,
      }}
    >
      {props.children}
    </contextCell.Provider>
  );
};

export default ContextWrap;
