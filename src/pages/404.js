import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout.js";
import "../styles/404.scss";

export default function NotFound({ location }) {
    return (
        <Layout location={location}>
            <title>Page not found...</title>
            <h1>Page not found...</h1>
            <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                we couldn’t find what you were looking for. <Link to="/">Go home</Link>.
            </p>
        </Layout>
    );
}
