import { useEffect, useContext } from "react";
import contextCell from "../useContext/contextCell";

const Contact = () => {
  const contextCellValue = useContext(contextCell);
  const { contactUserData, setContactUserData, handleContactInputs } =
    contextCellValue;

  const callContactPage = async () => {
    try {
      // const { name, email, phone, message } = contactUserData;

      const response = await fetch("http://localhost:4000/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setContactUserData({
        ...contactUserData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    callContactPage();
    // eslint-disable-next-line
  }, []);

  //storing data into backend
  const ContactFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = contactUserData;
    const response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, phone, message }),
    });
    // console.log(contactUserData, "before");
    const data = await response.json();
    // console.log("data", data);

    if (!data) {
      alert("Something went wrong");
    } else {
      alert("message sent");
      setContactUserData({ ...contactUserData, message: "" });
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="my-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6>Phone</h6>
                  <small>
                    {contactUserData.name ? contactUserData.name : "name"}
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="my-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h6>Email</h6>
                  <small>
                    {contactUserData.phone
                      ? contactUserData.phone
                      : "example@gmail.com"}
                  </small>
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
          <form method="POST">
            <div className="mb-1">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                name="name"
                value={contactUserData.name}
                onChange={handleContactInputs}
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                name="email"
                value={contactUserData.email}
                onChange={handleContactInputs}
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Number" className="form-label">
                Mobile Number
              </label>
              <input
                name="phone"
                value={contactUserData.phone}
                onChange={handleContactInputs}
                type="Number"
                className="form-control"
                id="phone"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                value={contactUserData.message}
                onChange={handleContactInputs}
                className="form-control"
                id="message"
              ></textarea>
            </div>
            <button
              onClick={ContactFormSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
