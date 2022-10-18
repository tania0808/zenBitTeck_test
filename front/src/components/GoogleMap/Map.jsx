import React from "react";
import map from "../../assets/images/googleMap.svg";
import { Wrapper, MapS } from "./Map.styled";

export const Map = () => {
  return (
    <Wrapper>
      <MapS>
        <img src={map} alt="" />
      </MapS>
    </Wrapper>
  );
};
