import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Property</Link>
      <Link to="/">Services</Link>
      <Link to="/">Contact</Link>
    </div>
  );
}

export default NavBar;
