import { useNavigate } from "react-router-dom";
import contextCell from "../useContext/contextCell";
import { useEffect, useContext } from "react";

const About = () => {
  let history = useNavigate();
  const contextCellValue = useContext(contextCell);
  const { aboutUserData, setAboutUserData } = contextCellValue;

  const callAboutPage = async () => {
    try {
      const response = await fetch("http://localhost:4000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setAboutUserData(data);
      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      history("/");
    }
  };

  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        style={{ width: "60%", margin: "70px auto", border: "1px solid grey" }}
      >
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4 mb-3 pt-3">
              <small>
                Hacker
                <br />
                Youtuber
                <br />
                Programmer
                <br />
                Developer
                <br />
                Gamer
                <br />
                Tester
                <br />
                Coder
              </small>
            </div>

            <div className="col-md-4 mb-3 pt-1">
              <p>User_id</p>
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Profession</p>
            </div>
            <div className="col-md-4 mb-3 pt-1">
              <p>{aboutUserData._id}</p>
              <p>{aboutUserData.name}</p>
              <p>{aboutUserData.email}</p>
              <p>{aboutUserData.phone}</p>
              <p>{aboutUserData.work}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
