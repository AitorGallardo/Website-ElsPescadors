import React, { Component } from "react";
import { graphql, useStaticQuery } from "gatsby"
import "../assets/styles/components/image-swiper.css";


const IMG_WIDTH = 700;
const IMG_HEIGHT = 400;








const ImageSwiper = () => {

    const data = useStaticQuery(graphql`
        query {
        allImageSharp {
            edges {
            node {
                id
                fluid(maxWidth: 700, maxHeight: 400) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }`);

      const  state = {
            imgs: data.allImageSharp.edges,
            movement: 0,
            currentIndex: 0,
        };

    const handleMovement = (delta) => {

            const maxLength = state.imgs.length - 1;
            let nextMovement = state.movement + delta;
            if (nextMovement < 0) {
              nextMovement = 0;
            }
            if (nextMovement > maxLength * IMG_WIDTH) {
              nextMovement = maxLength * IMG_WIDTH;
            }
            state.movement = nextMovement;

    }

    const handleWheel = (e) => {
        console.log('event', e);

        handleMovement(e.deltaX);
    }

        const { imgs } = state;
        return (
            <div className="App">
                <div
                    className="main"
                    style={{
                        width: `${IMG_WIDTH}px`,
                        height: `${IMG_HEIGHT}px`,
                    }}
                    onWheel={handleWheel}
                >
                    <div className="swiper"
                        style={{
                            transform: `translateX(${state.movement * -1}px)`,
                        }}>
                        {imgs.map(src => {
                            return <img key={src.node.id} src={src.node.fluid.src} width="100%" height="100%" />
                        }
                        )}
                    </div>
                </div>
            </div>
        );
}





export default ImageSwiper;