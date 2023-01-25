import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from "./hooks/useUserContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/styles.css";

const App = () => {
  const { userState } = useUserContext();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={userState.user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!userState.user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!userState.user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
