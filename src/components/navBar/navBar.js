import * as React from "react";
import { Link } from "gatsby";
import "./navBar.scss";

// markup
const NavBar = () => {
    return <nav>
        <ol>
            <li><Link to="/">Keyboards and Dice</Link></li>
            <li><Link to="/terra-2170">Terra 2170</Link></li>
            <li><Link to="/darkham-horror">Darkham Horror</Link></li>
        </ol>
    </nav>;
};

export default NavBar;
