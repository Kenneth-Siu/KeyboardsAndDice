import * as React from "react";
import NavBar from "../navBar/navBar.js";
import "./cssreset.css";
import "./layout.scss";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className="container">{children}</main>
        </>
    );
}
