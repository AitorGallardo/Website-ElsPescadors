import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import SEO from "../../components/seo"
import menu_CAT_1 from "../../images/menus/menu_CAT_1.jpg"
import menu_CAT_2 from "../../images/menus/menu_CAT_2.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import "./cat.css"

const MenuCat = () => (
  <div>
    <SEO title="Carta" />
    <Header underline="menu" />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LanguageNav />
      <div className="menu-pages-cat">
        <ModalImage
          small={menu_CAT_1}
          large={menu_CAT_1}
          alt="Cat Menu 1"
        />
        <ModalImage
          small={menu_CAT_2}
          large={menu_CAT_2}
          alt="Cat Menu 2"
        />
      </div>
    </div>
    <Footer />
  </div>
)

export default MenuCat
