import { useContext, useEffect } from "react";
import contextCell from "../useContext/contextCell";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const contextCellValue = useContext(contextCell);
  const { setToggleLogin } = contextCellValue;
  let history = useNavigate();
  const callLogout = async () => {
    const res = await fetch("http://localhost:4000/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (res.status !== 200) {
      window.alert("logout failed");
      // console.log("error found");
    } else if (!data.success) {
      localStorage.removeItem("login");
      setToggleLogin(false);

      window.alert("logout succeeded");
      history("/login");
    }
  };

  useEffect(() => {
    callLogout();
  });
  return (
    <>
      <h2>logout page working</h2>
    </>
  );
};

export default Logout;
