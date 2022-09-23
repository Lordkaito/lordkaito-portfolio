import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <p>isai</p>
      </div>
      <div className="navbar-links">
        <nav className="navbar">
          <ul className="links-ul">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
