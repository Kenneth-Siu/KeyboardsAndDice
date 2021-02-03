import * as React from "react";
import { Link } from "gatsby";
import NavBar from "../components/navBar/NavBar";
import "../styles/404.scss";

const NotFound = () => {
    return (
        <main>
            <title>Page not found...</title>
            <NavBar />
            <h1>Page not found...</h1>
            <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                we couldn’t find what you were looking for.{" "}
                <Link to="/">Go home</Link>.
            </p>
        </main>
    );
};

export default NotFound;
