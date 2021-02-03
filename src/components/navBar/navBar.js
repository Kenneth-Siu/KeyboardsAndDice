import * as React from "react";
import { Link } from "gatsby";
import "./navBar.scss";

export default function NavBar({ location }) {
    return (
        <nav className="nav-bar">
            <ul>
                <li className="home">
                    <Link to="/">⌨ Keyboards and Dice</Link>
                </li>
                <li className={`terra-2170 ${location.pathname.startsWith("/terra-2170") ? "is-current-page" : ""}`}>
                    <Link to="/terra-2170">Terra 2170</Link>
                </li>
                <li className={`darkham-horror ${location.pathname.startsWith("/darkham-horror") ? "is-current-page" : ""}`}>
                    <Link to="/darkham-horror">Darkham Horror</Link>
                </li>
            </ul>
        </nav>
    );
}
