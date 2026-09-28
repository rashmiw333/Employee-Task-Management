import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <Link to="/" className="navbar-brand">
          Employee Manager
        </Link>

        <div>

          <Link
            to="/"
            className="btn btn-outline-light me-2"
          >
            Dashboard
          </Link>

          <Link
            to="/employees"
            className="btn btn-outline-light"
          >
            Employees
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;