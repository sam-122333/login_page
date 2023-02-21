import { useContext } from "react";
import contextCell from "../useContext/contextCell";

const Signup = () => {
  const contextCellValue = useContext(contextCell);
  const { handleRegInputs, setRegUserData, regUserData } = contextCellValue;

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = regUserData;
    // console.log(regUserData);
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    if (response.status === 400 || response.status === 402 || !response) {
      window.alert("Something went wrong");
      // console.log("registration failed");
    } else {
      window.alert("successfully registered");
      // console.log("registration successfully");
      setRegUserData({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <>
      <div style={{ width: "50%", margin: "auto" }}>
        <h1>Sign Up</h1>
        <form method="POST">
          <div className="mb-1 mt-5">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={regUserData.name}
              onChange={handleRegInputs}
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={regUserData.email}
              onChange={handleRegInputs}
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="Number" className="form-label">
              Mobile Number
            </label>
            <input
              type="Number"
              name="phone"
              value={regUserData.phone}
              onChange={handleRegInputs}
              className="form-control"
              id="Number"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="profession" className="form-label">
              Profession
            </label>
            <input
              type="text"
              name="work"
              value={regUserData.work}
              onChange={handleRegInputs}
              className="form-control"
              id="profession"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={regUserData.password}
              onChange={handleRegInputs}
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              value={regUserData.cpassword}
              onChange={handleRegInputs}
              className="form-control"
              id="cpassword"
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={postData}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
