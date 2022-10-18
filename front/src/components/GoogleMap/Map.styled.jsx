import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MapS = styled.div`
  & > img {
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
`;
