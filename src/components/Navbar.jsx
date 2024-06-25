import React, { useState } from "react";
function Navbar() {
  const navItems = ["Home", "Chat", "Profile", "Notification", "Logout"];
  const [DarkTheme, SetDarkTheme] = useState(false);
  const ToggleTheme = () => {
    SetDarkTheme(!DarkTheme);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="nav-container">
      <div className="header">
        <img
          width="48px"
          height="48px"
          src="data:image/png;base64,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"
        />
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="Action-btns">
          <button className="Action-btn btn1">Login</button>
          {/* <button className="Action-btn btn2">Signup</button> */}
          <button className=" btn2">Signup</button>

          <button className="theme-btn" onClick={ToggleTheme}>
            {!DarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-moon-stars-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-brightness-high-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
