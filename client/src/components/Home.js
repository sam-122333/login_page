import { useContext } from "react";
import contextCell from "../useContext/contextCell";

const Home = () => {
  const context = useContext(contextCell);
  const { pageName } = context;

  return (
    <div className="container">
      <div style={{ width: "60%", margin: "160px auto" }}>
        <h5 className="text-center">{pageName}</h5>
        <h1 className="text-center">we are the mern developer</h1>
      </div>
    </div>
  );
};

export default Home;
