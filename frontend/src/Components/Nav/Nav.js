import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"



function Nav() {

  const { currentUser, signOut } = useAuth();


  return (
    <nav className="nav-main">
      {/* logo */}
      <Link to="/">
        <img
          className="nav-logo"
          src="data:image/png;base64,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"
          alt="nav-logo"
        />
      </Link>
      {/* search bar */}
      {/* <div className="nav-search">
        <input type="text" className="nav-search-input" />
      </div> */}
      {/* 3 links */}

      <div className="nav-nav">
        {/* 1st link */}
        <Link to="/searchjobs" className="nav-link">
              <div className="nav-option">
                <span className="nav-option-line-one">Search Jobs</span>

              </div>
            </Link>
        {currentUser ? (
          <Link to="/" onClick={() => signOut()} className="nav-link">
            <div className="nav-option">
              <span className="nav-option-line-one">Log out</span>

            </div>
          </Link>
          
        ) : (
          <>

            <Link to="/Signin" className="nav-link">
              <div className="nav-option">
                <span className="nav-option-line-one">Log in</span>

              </div>
            </Link>

        
        <Link to="/Signup" className="nav-link">
          <div className="nav-option">
            <span className="nav-option-line-one">Register</span>

          </div>
        </Link>
        </>
        )

        }


      </div>
    </nav>
  );
}

export default Nav;