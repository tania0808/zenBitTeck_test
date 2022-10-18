import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 80px;
    padding: 0 30px;
  }

  .form-control {
    width: 557px;
    margin-top: 8px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    :focus {
        outline: 1px solid #fad34f ;
    }

    ::placeholder {
      color: #000000bd;
    }
  }

  textarea {
    resize: none;
    height: 160px;
    padding: 30px 30px 0 30px;
  }
`;
