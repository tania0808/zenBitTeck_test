import React from "react";
import map from "../../assets/images/googleMap.svg";
import { Wrapper, MapS } from "./Map.styled";
import yellowDown from "../../assets/images/yellowDown.svg";
import pink from "../../assets/images/pink.svg";
import cloud from "../../assets/images/cloud.svg";
import sun from "../../assets/images/sun.svg";

export const Map = () => {
  return (
    <Wrapper>
      <MapS>
        <img className="sun" src={sun} alt="sun" />
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="little-cloud" src={cloud} alt="cloud" />
        <img className="map" src={map} alt="map" />
        <img className="yellow" src={yellowDown} alt="yellow smiley" />
        <img className="pink" src={pink} alt="pink smiley" />
      </MapS>
    </Wrapper>
  );
};
