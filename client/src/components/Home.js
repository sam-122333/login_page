import { useContext, useEffect } from "react";
import contextCell from "../useContext/contextCell";

const Home = () => {
  const context = useContext(contextCell);
  const { pageName, setPageName } = context;

  const callContactPage = async () => {
    try {
      const response = await fetch("http://localhost:4000/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setPageName(data.name);

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

  return (
    <div className="container">
      <div style={{ width: "60%", margin: "160px auto" }}>
        <h5 className="text-center">welcome {pageName}</h5>
        <h1 className="text-center">we are the mern developer</h1>
      </div>
    </div>
  );
};

export default Home;
