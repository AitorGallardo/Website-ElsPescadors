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
            <div className="g_container">
                <BackgroundImage
                    className="about-image"
                    fluid={data.indexImage.childImageSharp.fluid}
                >
                    <div className="over">

                    </div>
                </BackgroundImage>
                <div className="text-container">
                    <h1>Els Pescadors</h1>
                    <p>Auténtica brasería que recoge lo mejor de la gastronomía mediterránea. Cuenta con 2 espacios diferenciados, la planta baja es ideal para degustar tapas y 
                        montaditos de excelente calidad, y en la de arriba, una gran variedad de productos a la brasa.</p>
                </div>
            </div>

        </div>

    );
}
export default About

