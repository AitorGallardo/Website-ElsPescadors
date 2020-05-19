import React from 'react';
import map_marker from "../icons/map_marker.svg"


const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

const Marker = (props) => {
  const { color, name, id } = props;
  return (
    <img style={markerStyle} src={map_marker} alt="Social Instagram Icon" widt="32px" height="32px"/>
  );
};

export default Marker;