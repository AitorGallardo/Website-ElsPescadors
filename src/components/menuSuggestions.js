import React, { useState } from "react"
import ModalImage from "react-modal-image";

/*This component prevents from being doing the same graphql query every time
suggestions is changed to menu. It encapsultes his own state and just this component]
is being rerendered instead of the whole parent*/ 

const MenuSuggestions = ({menuImage1,menuImage2,suggestionsImage, options}) => {
  
  const { menuName,suggestionsName,imgAltMenu,imgAltWine,isWine } = options;  
  const [suggestions, setSuggestions] = useState(false)
  const [image1, setImage1] = useState(menuImage1)
  const [image2, setImage2] = useState(menuImage2)



  const showSuggestions = (isShown) => {
    if(isShown){
        setSuggestions(true)
        setImage1(suggestionsImage)
    }else{
        setSuggestions(false)
        setImage1(menuImage1)
        //setImage2(image2)
    }
  }

  return (
    <>
      {suggestions ? (
        <div
          className="menu-image-header"
          onClick={() => {
               showSuggestions(false)          
          }}
        >
          <div
            style={{
              display: "list-item",
              listStyleType: "disc",
              listStylePosition: "inside",
              textDecoration: "underline",
              fontStyle: "italic",
              cursor: "pointer",
            }}
          >
            {menuName}
          </div>
        </div>
      ) : (
        <div
          className="menu-image-header"
          onClick={() => {
            showSuggestions(true)    
          }}
        >
          <div
            style={{
              display: "list-item",
              listStyleType: "disc",
              listStylePosition: "inside",
              textDecoration: "underline",
              fontStyle: "italic",
              cursor: "pointer",
            }}
          >
            {suggestionsName}
          </div>
        </div>
      )}
      {image1 && (
        <ModalImage
          className="menu-image"
          small={image1}
          large={image1}
          hideZoom={true}
          alt={imgAltMenu}
        />
      )}
      {isWine && (<h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>{isWine}</h2>)}
      {image2 && (
        <ModalImage
          className="menu-image"
          small={image2}
          large={image2}
          hideZoom={true}
          alt={imgAltWine}
        />
      )}
    </>
  )
}

export default MenuSuggestions
