import logo from "../assets/logo.webp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const MainPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handler = () => {
    setLogin(!login);
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="navbar">
      <img src={logo} alt="image" />

      <ul>
        <li className="status">
          Online Status:
          <span className={`dot ${isOnline ? "green" : "red"}`}></span>
        </li>

        <li className="one">Home</li>
        <li className="two" onClick={() => navigate("/about")}>
          About
        </li>
        <li className="three" onClick={() => navigate("/contact")}>
          Contact Us
        </li>
        <li className="four">
          <FaShoppingCart />
          <span onClick={() => navigate("/grocery")}>Grocery</span>
        </li>
      </ul>

      <h4>Ganesh Kumar</h4>
      <button className="button" onClick={handler}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
};
