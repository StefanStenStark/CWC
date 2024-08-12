import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Code With Confidence - CWC</div>
      <ul className="navbar-links">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Game</Link>
        </li>
        <li>
          <a href="#about">Score</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
