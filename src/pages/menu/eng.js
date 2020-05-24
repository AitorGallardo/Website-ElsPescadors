import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_ENG from "../../images/menus/menu_ENG.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuEng = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav selected="eng"/>
      <ModalImage className="menu-image"
        small={menu_ENG}
        large={menu_ENG}
        hideZoom={true}
        alt="Menu"
      />
    </div>
    <Footer />
  </div>
)

export default MenuEng
