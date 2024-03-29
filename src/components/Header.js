import { useState } from "react";
import React from "react";
function Header() {
  const [button, setButton] = useState(true);
  function handleClick() {
    setButton(!button);
  }
  return (
    <>
    <header>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="menulogo">
              <img src={require("../assets/menuimg.png")} alt="menu logo"></img>
            </div>
            <div className={button ? "navbar" : ""} data-testid="navbar">
              <ul className="navbar">
                <li>
                  <a href="#mosoda">Mosoda</a>
                </li>
                <li>
                  <a href="#services">Szolgáltatásaink</a>
                </li>
                <li>
                  <a href="#munkaruha">Munkaruha</a>
                </li>
                <li>
                  <a href="#referenciak">Referencia</a>
                </li>
                <li>
                  <a href="#rolunk">Rólunk</a>
                </li>
                <li>
                  <a href="#job">Karrier</a>
                </li>
                <li>
                  <a href="#arajanlat">Árajánlat</a>
                </li>
                <li>
                  <a href="#kapcsolat">Kapcsolat</a>
                </li>
              </ul>
            </div>
            <a href="#">
              <img
              data-testid="hamburger"
                src={require("../assets/menu.png")}
                className="menu"
                alt="hamburger menu"
                onClick={handleClick}
              />
            </a>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
export default Header;
