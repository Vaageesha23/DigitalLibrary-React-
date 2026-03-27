import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">

        <Link to="/">Home</Link>

        <Link to="/library">Library</Link>

        <Link to="/recommendations">Recommendations</Link>

        <Link to="/wishlist">Wishlist ❤️</Link>

      </div>


      {/* RIGHT SIDE */}
      {user && (

        <div className="nav-right">

          <span>{user.email}</span>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

      )}

    </nav>

  );

}

export default Navbar;