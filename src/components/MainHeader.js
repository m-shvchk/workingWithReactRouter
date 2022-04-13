import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
            {/* in NavLink you can define active className to highlight the link that you are on */}
            {/* <Link to="/welcome">Welcome</Link> */}
            {/* Link element prevents reloading the app in comparison to usual 'a href' */}
          </li>
        </ul>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
