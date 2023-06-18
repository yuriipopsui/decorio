import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/objects">Objects</Link>
        </li>
        <li>
          <Link to="objects/create_object">New Object</Link>
        </li>
        <li>
        <Link to="/tools">Tools</Link>
        </li>
        <li>
        <Link to="/staff">Staff</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
