import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div>
      <div>
        <Spinner animation="border" />
      </div>
    </div>
  );
}

export default Loader;
