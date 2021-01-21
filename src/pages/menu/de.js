import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import LanguageNav from "../../components/language_nav"
import MenuLayout from "../../components/menuLayout"
import MenuSuggestions from "../../components/menuSuggestions"








const MenuDe = () => {

  const data = useStaticQuery(graphql`
    query getDeImages {
      allFile(filter: {relativeDirectory: {eq: "menus"}, name: {regex: "/DE/"}}) {
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
    menuName:'Menü',
    suggestionsName:'Vorschläg',
    imgAlt:'Speisekarte',
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
          <LanguageNav selected="de" />
          <MenuSuggestions menuImage={menuImage} suggestionsImage={suggestionsImage} options={options}/>
        </div>
      </MenuLayout>
    </div>
  )
}
export default MenuDe
