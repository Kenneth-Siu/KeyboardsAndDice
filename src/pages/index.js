import * as React from "react";
import Layout from "../components/layout/layout.js";
import "../styles/index.scss";

export default function Index({ location }) {
    return (
        <Layout location={location}>
            <title>Keyboards and Dice</title>
            <main>
                <div className="terra-feature">
                    <h1>Terra 2170</h1>
                    <p>This is some text</p>
                </div>
                <div className="darkham-feature">
                    <h1>Darkham Horror</h1>
                    <p>This is some text</p>
                </div>
            </main>
        </Layout>
    );
}
