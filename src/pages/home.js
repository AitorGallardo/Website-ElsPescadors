import React, {useEffect, useState} from "react"
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
import SideBar from "../components/sidebar"
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
  const [isSidebarOpen, setSidebar] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "elspescadors4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid 
          }
        }
      }
    }
`)
  // On build protection
  if (typeof window !== `undefined`) {
    const locationToScroll = window.scrollOnRoutingId ? window.scrollOnRoutingId : '';
  }else {
    const locationToScroll = '';
  }

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
      <SideBar id="sidebar" mainId="home" open={isSidebarOpen} onClickClose={(e) => setSidebar(false)} pageWrapId={"page-wrap"} outerContainerId={"container"} />
        <Header mainId="home" toggleSidebar={()=>setSidebar(true)} />
        <BackgroundImage
          className="main-backgroundImage"
          fluid={data.indexImage.childImageSharp.fluid}
        >
          <div className="overlay">
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

