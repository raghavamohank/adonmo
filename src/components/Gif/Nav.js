import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { login, logout, isLoggedIn } from "./AuthService";
import { uploadWidget } from "./WidgetHelper";


class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Cliphy
            </Link>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">All Gifs</Link>
              </li>
              <li>
                <Link to="/create">Create Gif</Link>
              </li>
            </ul>
            {/* <ul className="nav navbar-nav navbar-right">
              <li>
                {isLoggedIn() ? (
                  <button
                    type="button"
                    className="btn btn-raised btn-sm btn-default"
                  >
                    Upload Gif
                  </button>
                ) : (
                  ""
                )}
              </li>
              <li>
                {isLoggedIn() ? (
                  <button
                    type="button"
                    className="btn btn-raised btn-sm btn-danger"
                    onClick={() => logout()}
                  >
                    Log out{" "}
                  </button>
                ) : (
                  <button
                    className="btn btn-sm btn-raised btn-default"
                    onClick={() => login()}
                  >
                    Log In
                  </button>
                )}
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
