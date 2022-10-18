import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 4rem;
  position: relative;

  .smiley {
    position: absolute;
    width: 80px;
    top: -80px;
    left: 10px;
    @media (max-width: 976px) {
      width: 120px;
      left: -40%;
      top: -2%;
    }
    @media (max-width: 576px) {
      width: 120px;
      left: 70%;
      top: 2%;
    }
  }

  @media (max-width: 976px) {
    padding: 5rem 0;
  }

  h1 {
    margin-bottom: 1rem;
  }

  input {
    height: 80px;
    padding: 0 30px;
  }

  textarea {
    resize: none;
    height: 160px;
    padding: 30px 30px 0 30px;
  }

  .form-control {
    width: 100%;
    margin-top: 8px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    :focus {
      outline: 1px solid #fad34f;
    }

    ::placeholder {
      color: #000000bd;
    }
  }
`;
