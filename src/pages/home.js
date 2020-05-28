import React, {useEffect} from "react"
import { Link } from "react-scroll"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import About from "./about"
import Contact from "./contact"
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

  const locationToScroll = window.scrollOnRoutingId ? window.scrollOnRoutingId : '';
  const scrollTo = () => {
    const scrollLink = document.getElementById("scrollOnRouting");
    scrollLink.click();
  }

  useEffect(() => {
    if (window.scrollOnRoutingId) {
      scrollTo();
      delete window.scrollOnRoutingId;
    }
  });




  return (
    <div>
      <SEO title="Inici" />
      <div id="home-top-side">
        <Header mainId="home" />
        <BackgroundImage
          className="main-backgroundImage"
          fluid={data.indexImage.childImageSharp.fluid}
        >
          <div className="overlay">
            <Link style={{ color: 'white', backgroundColor: 'blue', cursor: 'pointer' }} to="about" smooth={true} duration={1000}> go to ABOUT</Link>
            <Link style={{ color: 'white', backgroundColor: 'red', cursor: 'pointer' }} to="contact" smooth={true} duration={1000}> go to CONTACT</Link>
          </div>
        </BackgroundImage>
      </div>
      <About />
      <Contact />
      <Link style={{ display: 'none' }} id="scrollOnRouting" to={locationToScroll} smooth={true} duration={1000}></Link>
      <Footer />
    </div>

  );
}
export default HomePage

