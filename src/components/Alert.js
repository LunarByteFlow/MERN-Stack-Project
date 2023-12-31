import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{props.message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
