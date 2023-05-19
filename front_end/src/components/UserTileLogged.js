import { useNavigate } from "react-router-dom";
import React from "react";

function UserTileLogged({ userInfo }) {
  const navigate = useNavigate();

  const firstName = userInfo?.first_name ?? "U";
  const lastName = userInfo?.last_name ?? "U";
  const initials = (firstName?.charAt(0) ?? "") + (lastName?.charAt(0) ?? "");

  const handleLogOut = (e) => {
    // clearAll();
    navigate("/", { replace: true });
  };

  return (
    <div className="col-auto">
      <div className="dropdown">
        <a
          className="btn p-0"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="container bg-danger bg-opacity-25 rounded py-1">
            <div className="row d-flex align-items-center px-2">
              <div className="col-auto p-0 m-0">
                <div
                  className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                  style={{ height: 40, width: 40 }}
                >
                  {initials}
                </div>
              </div>
              <div className="col-auto text-start">
                <small>{"User role"}</small>
                <p className="p=0 m-0">
                  {firstName} {lastName}
                </p>
              </div>
              <div className="col-auto p-0 m-0">
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
          </div>
        </a>

        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogOut}
            >
              <i className="bi bi-plugin"></i> logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserTileLogged;
