import React, { useState } from "react"
import ModalImage from "react-modal-image";

/*This component prevents from being doing the same graphql query every time
suggestions is changed to menu. It encapsultes his own state and just this component]
is being rerendered instead of the whole parent*/ 

const MenuSuggestions = ({menuImage,suggestionsImage, options}) => {
  
  const { menuName,suggestionsName,imgAlt } = options;  
  const [suggestions, setSuggestions] = useState(false)
  const [image, setImage] = useState(menuImage)



  const showSuggestions = (isShown) => {
    if(isShown){
        setSuggestions(true)
        setImage(suggestionsImage)
    }else{
        setSuggestions(false)
        setImage(menuImage)
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
      {image && (
        <ModalImage
          className="menu-image"
          small={image}
          large={image}
          hideZoom={true}
          alt={imgAlt}
        />
      )}
    </>
  )
}

export default MenuSuggestions
