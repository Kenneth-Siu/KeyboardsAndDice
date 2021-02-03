import * as React from "react";
import Layout from "../components/layout/layout.js";
import "../styles/darkham-horror.scss";

export default function DarkhamHorror({ location }) {
    return (
        <Layout location={location}>
            <title>Darkham Horror</title>
            <main>
                <h1>Darkham Horror</h1>
            </main>
        </Layout>
    );
}
