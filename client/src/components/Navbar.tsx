import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between px-14 py-4 bg-gray-100 shadow-lg navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <h1 className="text-4xl">Assignment Tracker</h1>
      </Link>
      <div className="">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="flex">
        <Link to="/login" className="pr-5">
          Login
        </Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
