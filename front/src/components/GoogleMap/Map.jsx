import React from "react";
import { Wrapper, MapS } from "./Map.styled";
import { yellowDown, pink, cloud, sun, googleMap } from "../../assets/index";

export const Map = () => {
  return (
    <Wrapper>
      <MapS>
        <img className="sun" src={sun} alt="sun" />
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="little-cloud" src={cloud} alt="cloud" />
        <img className="map" src={googleMap} alt="map" />
        <img className="yellow" src={yellowDown} alt="yellow smiley" />
        <img className="pink" src={pink} alt="pink smiley" />
      </MapS>
    </Wrapper>
  );
};
