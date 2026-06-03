import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { links } from "../constants/data";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <nav className={styles.navbar}>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={link.path}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(logout())}>Log out</button>
    </nav>
  );
};

export default Sidebar;
