import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <NavLink to="/" className="text-white hover:text-gray-300">
            <li>Home</li>
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            <li>About</li>
          </NavLink>
          <NavLink to="/job" className="text-white hover:text-gray-300">
            <li>Job</li>
          </NavLink>
        </ul>

        <button
          onClick={() => navigate("/about", { replace: true })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to About
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
