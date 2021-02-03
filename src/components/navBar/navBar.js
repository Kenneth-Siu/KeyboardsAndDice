import * as React from "react";
import { Link } from "gatsby";
import "./navBar.scss";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li className="home">
                    <Link to="/">⌨ Keyboards and Dice</Link>
                </li>
                <li className="terra-2170">
                    <Link to="/terra-2170">Terra 2170</Link>
                </li>
                <li className="darkham-horror">
                    <Link to="/darkham-horror">Darkham Horror</Link>
                </li>
            </ul>
        </nav>
    );
}
