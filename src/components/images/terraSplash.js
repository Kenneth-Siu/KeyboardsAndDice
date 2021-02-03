import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function TerraSplash({ className }) {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/terraSplash.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1280, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return <Img className={className} fluid={data.file.childImageSharp.fluid} />;
}
