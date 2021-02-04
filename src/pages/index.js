import * as React from "react";
import { Link } from "gatsby";
import DarkhamSplash from "../components/images/darkhamSplash.js";
import TerraSplash from "../components/images/terraSplash.js";
import Layout from "../components/layout/layout.js";
import "../styles/index.scss";

export default function Index({ location }) {
    return (
        <Layout location={location}>
            <title>Keyboards and Dice</title>
            <main className="index-page">
                <div className="terra">
                    <div className="splash">
                        <TerraSplash className="splashImage" />
                    </div>
                    <div className="content">
                        <h1>
                            <Link to="/terra-2170">Terra 2170</Link>
                        </h1>
                        <p>
                            What new powers and allies would planeswalkers bring to bear if they had access to
                            futuristic Earth technology?
                        </p>
                        <p>
                            <em>Terra 2170</em> is a science-fiction <em>Magic: the Gathering</em> expansion with 243
                            cards and four new mechanics, created especially for drafting.
                        </p>
                        <p className="link">
                            <Link to="/terra-2170">ᐳ Find out more</Link>
                        </p>
                    </div>
                </div>

                <div className="darkham">
                    <div className="splash">
                        <DarkhamSplash className="splashImage" />
                    </div>
                    <div className="content">
                        <h1>
                            <Link to="/darkham-horror">Darkham Horror</Link>
                        </h1>
                        <p>
                            A curious letter from a long-lost ancestor reveals a dark mystery. What cosmic horrors will
                            you uncover in your investigation?
                        </p>
                        <p>
                            <em>Darkham Horror</em> is an expansion for <em>Arkham Horror: The Card Game</em> themed
                            around <em>Darkest Dungeon</em>, featuring 8 scenarios and new investigator cards.
                        </p>
                        <p className="link">
                            <Link to="/darkham-horror">ᐳ Find out more</Link>
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
