import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import "./about.css"


const About = (props) => {

    const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "elspescadors1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid 
          }
        }
      }
    }
`)

    return (
        <div>
            <div className={`g_container pages-top-zone`} id="about">
                <BackgroundImage
                    className="about-image"
                    fluid={data.indexImage.childImageSharp.fluid}
                >
                </BackgroundImage>
                <div className="text-container">
                    <h1>Els Pescadors</h1>
                    <p>Restaurant ubicat al cor de la platja on podràs conèixer l'autèntica cuina mediterrània.</p>
                </div>
            </div>

        </div>

    );
}
export default About

