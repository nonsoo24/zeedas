import HomeIcon from "assets/svg/HomeIcon";
import StatIcon from "assets/svg/StatIcon";
import UserIcon from "assets/svg/UserIcon";
import React, {
    useCallback, useEffect, useRef, useState
} from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes/routePaths";
import Avatar from "../Avatar";

const Dropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const onNavigate = useCallback(
    (route) => {
      navigate(route);
    },
    [navigate],
  );

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div className={`menu-dropdown ${isOpen ? "open" : ""}`} ref={menuRef}>
      <button type="button" onClick={toggleMenu} className="menu-button">
        <Avatar />
      </button>

      {isOpen && (
        <ul className="menu-items">
          <li className="active" onClick={() => onNavigate(ROUTES.VIEWER_STATS)}>
            <HomeIcon />
            Home
          </li>
          <li onClick={() => onNavigate(ROUTES.RESUME)}>
            <UserIcon />
            Resume
          </li>
          <li onClick={() => onNavigate(ROUTES.VIEWER_STATS)}>
            <StatIcon />
            Viewer Stats
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
