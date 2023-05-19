import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO } from "../utils/statics";
import UserTileLogged from "./UserTileLogged";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          EMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/events">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookmarks">
                Bookmarks
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <UserTileLogged userInfo={{ first_name: "John", last_name: "doe" }} />
          <button className="btn btn-sm btn-outline-primary" type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
