import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_FR from "../../images/menus/menu_FR.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"

const MenuFr = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
      <LanguageNav />
      <ModalImage
        small={menu_FR}
        large={menu_FR}
        alt="Fr Menu"
      />
    </div>
    <Footer />
  </div>
)

export default MenuFr
