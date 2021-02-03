import * as React from "react";
import NavBar from "../navBar/navBar.js";
import "./cssreset.css";
import "./layout.scss";

export default function Layout({ children, location }) {
    return (
        <>
            <NavBar location={location} />
            <main className="container">{children}</main>
        </>
    );
}
