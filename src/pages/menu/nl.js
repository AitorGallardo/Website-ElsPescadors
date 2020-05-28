import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuNl = () => {

  const data = useStaticQuery(graphql`
  query {
    indexImage: file(relativePath: { eq: "menus/menu_NL.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid 
        }
      }
    }
  }
`)

  return(
  <div>
    <SEO title="Carta" />
    <Header mainId="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav selected="nl"/>
      <ModalImage className="menu-image"
        small={data.indexImage.childImageSharp.fluid.src}
        large={data.indexImage.childImageSharp.fluid.src}
        hideZoom={true}
        alt="Menukaart"
      />
    </div>
    <Footer />
  </div>
)
}
export default MenuNl
