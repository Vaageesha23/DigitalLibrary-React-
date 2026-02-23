import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>📚 Digital Library</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
      </div>
    </nav>
  );
}

export default Navbar;