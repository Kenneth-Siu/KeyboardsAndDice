import * as React from "react";
import DarkhamSplash from "../components/images/darkhamSplash.js";
import TerraSplash from "../components/images/terraSplash.js";
import Layout from "../components/layout/layout.js";
import "../styles/index.scss";

export default function Index({ location }) {
    return (
        <Layout location={location}>
            <title>Keyboards and Dice</title>
            <main className="index-page">

                <div>
                    <div className="splash">
                        <TerraSplash className="splashImage" />
                    </div>
                    <div className="content">
                        <h1>Terra 2170</h1>
                        <p>This is some text</p>
                    </div>
                </div>

                <div>
                    <div className="splash">
                        <DarkhamSplash className="splashImage" />
                    </div>
                    <div className="content">
                        <h1>Darkham Horror</h1>
                        <p>This is some text</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
