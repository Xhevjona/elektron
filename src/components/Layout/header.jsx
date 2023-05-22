import React from "react";
import "../Styles/Header.scss";
import { NavLink } from "react-router-dom";
function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "20px";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" id="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            LOGO
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={scrollToTop}>
              <NavLink
               exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <div className="dropdown">
              <button className="dropbtn">
                Services
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <NavLink
                  exact="true"
                  to="/residential-services"
                  activeclassname="active"
                  className="nav-links"
                  // onClick={click ? handleClick : null} 
                  onClick={() => {
                    scrollToTop();
                    (click ? handleClick : null)();
                  }
                }               
                  >
                  Residential Services
                </NavLink>
                <NavLink
                  exact="true"
                  to="/commercial-services"
                  activeclassname="active"
                  className="nav-links"
                  // onClick={click ? handleClick : null}
                  // onClick={() => {
                  //   {click ? handleClick : null};
                  //   functionTwo();
                  // }
                  onClick={() => {
                    scrollToTop();
                    (click ? handleClick : null)();
                  }
                }
                >
                  Commercial Services
                </NavLink>
              </div>
            </div>
            <li className="nav-item" onClick={scrollToTop}>
              <NavLink
                exact="true"
                to="/projects"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <NavLink
                exact="true"
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <NavLink
                exact="true"
                to="/contact-us"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
