import * as React from "react";
import TerraSplash from "../components/images/terraSplash.js";
import Layout from "../components/layout/layout.js";
import "../styles/terra-2170.scss";

export default function Terra2170({ location }) {
    return (
        <Layout location={location}>
            <title>Terra 2170</title>
            <main className="terra-page">
                <div className="splash-div">
                    <div className="splash">
                        <TerraSplash className="splash-image" />
                    </div>
                    <div className="content">
                        <h1>Terra 2170</h1>
                        <p><a href="#">ᐳ View the cards (WIP)</a></p>
                        <p><a href="#">ᐳ Draft now (WIP)</a></p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
