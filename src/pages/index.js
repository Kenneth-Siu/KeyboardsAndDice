import * as React from "react";
import Layout from "../components/layout/layout.js";
import "../styles/index.scss";

export default function Index({ location }) {
    return (
        <Layout location={location}>
            <title>Keyboards and Dice</title>
            <h1>Hello!</h1>
        </Layout>
    );
}
