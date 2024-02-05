import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="Container" suppressHydrationWarning={true}>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <div className=" d-flex align-items-center justify-content-center">
            <Link href="/" className="navbar-brand disabled row">
              <h3 className="d-flex w-100 text-danger">WhizzTech</h3>
            </Link>
          </div>
          <div>
            <div
              className="collapse navbar-collapse d-flex flex-row-reverse mx-4 "
              id="navbarText"
            >
              <ul
                className="navbar  me-auto mb-2 mb-lg-0 text-light  list-unstyled  "
                style={{ width: "400px" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link  "
                    style={{ textDecoration: "none", color: "white" }}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    style={{ textDecoration: "none", color: "white" }}
                    aria-current="page"
                    href={"/"}
                  >
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    style={{ textDecoration: "none", color: "white" }}
                    href={"/blogpage/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href={"/blogpage/Profile"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .nav-link {
            text-decoration: none;
            transition: all 0.5s;
            position: relative;
            padding-bottom: 3px;
          }
          .navbar ul li Link:active {
            color: red;
            list-style-type: none;
            text-decoration: none;
          }

          .nav-link:active {
            color: red !important;
            list-style-type: none;
            border-bottom: none;
            padding-bottom: 3px;
            margin-bottom: 3px;
            transform: scale(1.3);
          }
          .nav-link:hover::after {
            content: "";
            height: 1px;
            width: 100%;
            opacity: 1;
            background-color: red;
            position: absolute;
            bottom: 0;
            left: 0;
            margin-bottom: 3px;
          }

          .nav-link::after {
            transition: all 0.3s;
            opacity: 0;
          }
          #navbarText ul li:active {
            color: red !important
                ;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
