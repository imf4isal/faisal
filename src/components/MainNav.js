import {Fragment} from "react";

import "font-awesome/css/font-awesome.min.css";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <Fragment>
      <hr />
      <div className={classes.navbar}>
        <div className={classes["navbar-items"]}>
          <ul>
            <li>
              <a href="#">articles</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
          </ul>
        </div>
        <div className={classes["navbar-social"]}>
          <div className={classes.social}>
            <i className="fa fa-youtube"></i>
          </div>
          <div className={classes.social}>
            <i className="fa fa-facebook"></i>
          </div>
          <div className={classes.social}>
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>

      <hr />
    </Fragment>
  );
}

export default MainNav;
