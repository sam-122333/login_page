import React, { useEffect } from "react";

const About = () => {
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
              <p>123456</p>
              <p>Mr.X</p>
              <p>example@gmail.com</p>
              <p>+91 9872345626</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
