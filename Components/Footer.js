import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white" suppressHydrationWarning={true}>
      <div className="container p-4 pb-0">
        <div className="mb-4">
          <div className=" btn btn-outline-light btn-floating m-1">
            <i className="bi bi-facebook"></i>
          </div>

          <div className=" btn btn-outline-light btn-floating m-1">
            <i className="bi bi-twitter"></i>
          </div>
          <div className=" btn btn-outline-light btn-floating m-1">
            <i className="bi bi-instagram"></i>
          </div>
          <div className=" btn btn-outline-light btn-floating m-1">
            <i className="bi bi-linkedin"></i>
          </div>

          <div className=" btn btn-outline-light btn-floating m-1">
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: www.whizztechblogs.com
      </div>
    </footer>
  );
};

export default Footer;
