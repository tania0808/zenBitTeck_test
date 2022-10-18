import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MapS = styled.div`
  position: relative;

  .sun {
    position: absolute;
    left: -32px;
    top: 3%;
    @media (max-width: 976px) {
      left: -8%;
      top: -6%;
      width: 65px;
    }
  }
  .cloud {
    position: absolute;
    left: 24px;
    top: 22%;
    @media (max-width: 976px) {
      width: 120px;
      left: 65%;
      top: -16%;
    }
  }
  .little-cloud {
    position: absolute;
    left: -32px;
    top: 75%;
    width: 100px;
  }

  .map {
    border-radius: 50%;
    width: 623px;
    height: 623px;
    max-height: 623px;
    object-fit: fill;
    transform: translateX(16%);

    @media (max-width: 976px) {
      width: 300px;
      height: 300px;
      max-height: 300px;
      transform: translateX(0);
      margin-bottom: 2rem;
    }
  }

  .yellow {
    position: absolute;
    left: 10%;
    top: 50%;
    width: 100px;
    z-index: 1;
    @media (max-width: 976px) {
      left: -10%;
      top: 33%;
      width: 75px;
    }
  }
  .pink {
    position: absolute;
    left: 10%;
    top: 56%;
    width: 200px;
    @media (max-width: 976px) {
      left: -8%;
      top: 45%;
      width: 100px;
    }
  }
`;
