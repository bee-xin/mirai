import { Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mirai</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorite" className="nav-link">
          Favorites
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
