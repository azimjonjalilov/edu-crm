import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { links } from "../constants/data";

const Sidebar = () => {
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

      <button>Log out</button>
    </nav>
  );
};

export default Sidebar;
