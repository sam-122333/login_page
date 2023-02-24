import { useContext } from "react";
import contextCell from "../useContext/contextCell";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let history = useNavigate();
  const contextCellValue = useContext(contextCell);
  const { handleLoginInputs, loginUserData, setToggleLogin } = contextCellValue;

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = loginUserData;
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        secure: true,
        httpOnly: true,
        withCredentials: true,
        sameSite: "lax",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.success, "hello");

    if (response.status === 400 || response.status === 402 || !response) {
      window.alert("Something went wrong");
      // console.log("login failed");
    } else if (data.success) {
      localStorage.setItem("login", "true");
      setToggleLogin(true);
      window.alert("login successfully");
      // console.log("login successfully");
      history("/");
    }
  };
  return (
    <>
      <div style={{ width: "50%", margin: "auto" }}>
        <h1>Login</h1>
        <form method="POST" onSubmit={loginUser}>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={handleLoginInputs}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={handleLoginInputs}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
