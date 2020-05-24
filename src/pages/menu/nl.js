import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_NL from "../../images/menus/menu_NL.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuNl = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav selected="nl"/>
      <ModalImage className="menu-image"
        small={menu_NL}
        large={menu_NL}
        hideZoom={true}
        alt="Menukaart"
      />
    </div>
    <Footer />
  </div>
)

export default MenuNl
