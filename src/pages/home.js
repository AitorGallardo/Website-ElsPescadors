import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const Image = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "elspescadors4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const HomePage = () => {
  return (
    <div>
       <SEO title="Inici" />
      <Header />
      <div>
        <Image />
      </div>
      <Footer />
    </div>

  );
}
export default HomePage
