import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo montserrat">
          <span className="orange">Amit</span> Maurya
        </div>

        <div className="links-container">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
