import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"
import ModalImage from "react-modal-image"

const MenuEng = () => {

  const data = useStaticQuery(graphql`
  query getEngImages {
    allFile(filter: {relativeDirectory: {eq: "menus"}, name: {regex: "/ENG/"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 1800) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
  `)

  let menuImage = null;
  let suggestionsImage = null;

  const options = {
    menuName:'Menu',
    suggestionsName:'Suggestions',
    imgAlt:'Menu',
  }

  data.allFile.edges.map(({node})=>{
    if(node.base.includes('menu')){
      menuImage = node.childImageSharp.fluid.src;
    }else{
      suggestionsImage = node.childImageSharp.fluid.src;
    }
  })


  return (
    <div>
      <MenuLayout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LanguageNav selected="eng" />
          <ModalImage className="menu-image"
            small={menuImage}
            large={menuImage}
            hideZoom={true}
            alt={options.menuName}
          />
        </div>
      </MenuLayout>
    </div>
  )
}

export default MenuEng
