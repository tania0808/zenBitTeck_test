import styled from "styled-components";

export const FooterS = styled.footer`
  width: 100vw;
  max-height: 200px;
  min-height: 150px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  .pink {
    position: absolute;
    bottom: -1.6rem;
    width: 20%;
    max-width: 250px;
    min-width: 120px;
  }
  .yellow {
    position: absolute;
    right: -2rem;
    width: 10%;
    min-width: 100px;

  }
  .green {
    position: absolute;
    top: -20px; 
    right: 10%;
    width: 6%;
    min-width: 60px;

  }
`;

export const SocialIcons = styled.ul`
  width: 50%;
  margin: 0 auto;
  display: flex;
  gap: 20px;

  

  li {
    list-style-type: none;
  }

  a {
    color: #686262;
    font-size: 20px;
  }
`;
