import React from "react"
import { Link } from "react-scroll"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import About from "./about"
import "./home.css"


// const Image = () => {
//   const data = useStaticQuery(graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "elspescadors4.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 5000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `)

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{ height: '100vh' }} />
// }

const HomePage = (props) => {

  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "elspescadors4.jpg" }) {
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
      <SEO title="Inici" />
      <Header underline="home" />
      {/* <div>
        <Image />
      </div> */}
      <BackgroundImage
        className="main-backgroundImage"
        fluid={data.indexImage.childImageSharp.fluid}
      >
        <div className="overlay">
          <Link style={{color:'white', backgroundColor: 'blue', cursor: 'pointer'}} to="about" smooth={true} duration={1000}> go to ABOUT</Link>
        </div>
      </BackgroundImage>
      <About />
      <Footer />
    </div>

  );
}
export default HomePage

