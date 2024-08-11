import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Code With Confidence - CWC</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Profile</a>
        </li>
        <li>
          <a href="#about">Score</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
