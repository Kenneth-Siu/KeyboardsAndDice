import * as React from "react";
import DarkhamSplash from "../components/images/darkhamSplash.js";
import Layout from "../components/layout/layout.js";
import "../styles/darkham-horror.scss";

export default function DarkhamHorror({ location }) {
    return (
        <Layout location={location}>
            <title>Darkham Horror</title>
            <main className="darkham-page">
                <div className="splash-div">
                    <div className="splash">
                        <DarkhamSplash className="splash-image" />
                    </div>
                    <div className="content">
                        <h1>Darkham Horror</h1>
                        <p><a href="#">ᐳ Download for TTS (WIP)</a></p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
