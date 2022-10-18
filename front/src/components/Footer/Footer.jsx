import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { FooterS, SocialIcons } from "./Footer.styled";
import * as images from '../../assets/index';

export default function Footer() {
  const social = [FaLinkedinIn, FaTwitter, FaFacebookF, FaPinterestP];
  return (
    <FooterS>
      <img src={images.pink} alt="" className="pink" />
      <SocialIcons>
        {social.map((icon, index) => {
          const Icon = icon;
          return (
            <li key={index}>
              <a href="#"><Icon/></a>
            </li>
          );
        })}
      </SocialIcons>
      <img src={images.green} alt=""  className="green"/>
      <img src={images.yellowUp} alt=""  className="yellow"/>
    </FooterS>
  );
}
