import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import contextCell from "../useContext/contextCell";

const Logout = () => {
  const contextCellValue = useContext(contextCell);
  const { setLoginToggle } = contextCellValue;
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
    if (res.status !== 200) {
      window.alert("logout failed");
      // console.log("error found");
    } else {
      setLoginToggle(true);
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
