import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../styles/Style.css'
import defaultAvatar from '../Assets/img/avatar.png'

function Layout() {
  return (
    <>
      <nav>
        {/* Left Side Nav */}

        <div className="lt-nav">
          <Link to='/'>H-Portfolio</Link>
        </div>

        {/* Middle Side Nav */}
        <div className="md-nav">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/feature">Feature</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Nav */}

        <div className="rt-nav">
          <img src={defaultAvatar} alt="" className="avatar"/>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
