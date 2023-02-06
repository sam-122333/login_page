import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ margin: "170px auto", textAlign: "center" }}>
      <h1>Error Page</h1>
      <h2>404 Not Found</h2>
      <Link to={"/"}>
        <button type="button" class="btn btn-primary">
          Back to the home page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
