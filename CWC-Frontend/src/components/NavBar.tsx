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
          <Link to="/Tests">Tests</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
