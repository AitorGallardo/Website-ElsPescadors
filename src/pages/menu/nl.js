import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"

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
    <MenuLayout>
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav selected="nl"/>
      <ModalImage className="menu-image"
        small={data.indexImage.childImageSharp.fluid.src}
        large={data.indexImage.childImageSharp.fluid.src}
        hideZoom={true}
        alt="Menukaart"
      />
    </div>
      </MenuLayout>
  </div>
)
}
export default MenuNl
