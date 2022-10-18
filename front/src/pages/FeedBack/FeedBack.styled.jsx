import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 150px);
  background-color: white;
  display: flex;

  & > div {
    width: 50%;
  }

  @media (max-width: 976px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;

    & > div {
      width: 80%;
    }
  }
`;
