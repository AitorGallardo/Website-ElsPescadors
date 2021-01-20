import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../assets/styles/pages/about.css"


const About = (props) => {

    const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "elspescadors_aboutUs.jpeg" }) {
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
                    <p style={{letterSpacing: '2px', lineHeight: '33px'}}>Restaurant Mediterrani ubicat en ple cor de la platja de Pineda de Mar.
De caire familiar, anys de tradició i cuina de proximitat, intentem sempre donar un servei ràpid, eficient i de qualitat perquè els moments en aquest indret únic, siguin inoblidables.</p>
                </div>
            </div>

        </div>

    );
}
export default About

