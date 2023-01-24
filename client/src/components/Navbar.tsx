import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useUserContext } from "../hooks/useUserContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { userState } = useUserContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between px-14 py-4 bg-gray-100 shadow-lg navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <h1 className="text-4xl">Assignment Tracker</h1>
      </Link>
      {userState.user ? (
        <div className="flex">
          <span className="pr-5">{userState.user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="flex">
          <Link to="/login" className="pr-5">
            Login
          </Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
