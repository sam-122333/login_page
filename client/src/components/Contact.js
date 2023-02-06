import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="my-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6>Phone</h6>
                  <small>+91 9872345626</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="my-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6>Email</h6>
                  <small>example@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="my-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6>Address</h6>
                  <small>Lucknow,UP,India</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ width: "50%", margin: "auto" }}>
          <h3 className="mb-4">Get in touch</h3>
          <form>
            <div className="mb-1">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-1">
              <label htmlFor="Number" className="form-label">
                Mobile Number
              </label>
              <input type="Number" className="form-control" id="Number" />
            </div>
            <div className="mb-1">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
