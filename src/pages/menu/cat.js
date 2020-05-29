import React from "react"
import menu_CAT_1 from "../../images/menus/menu_CAT_1.jpg"
import menu_CAT_2 from "../../images/menus/menu_CAT_2.jpg"
import ModalImage from "react-modal-image";
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"


const MenuCat = () => (
  <div>
    <MenuLayout>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LanguageNav selected="cat"/>
      <div>
        <ModalImage
          small={menu_CAT_1}
          large={menu_CAT_1}
          hideZoom={true}
          alt="Carta 1/2"
        />
        <ModalImage
          small={menu_CAT_2}
          large={menu_CAT_2}
          hideZoom={true}
          alt="Carta 2/2"
        />
      </div>
    </div>
      </MenuLayout>
  </div>
)

export default MenuCat
