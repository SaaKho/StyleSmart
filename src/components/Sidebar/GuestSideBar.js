import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const GuestSideBar = () => {
  return (
    <>
      <div className="guestSidebar">
        <Navbar>
          <ul>
            <li>
              <Link to="/">
                <img src="/images/white-star-Group.svg" alt="icon" />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <img src="/images/user-Generic.svg" alt="icon" />
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
};

export default GuestSideBar;
