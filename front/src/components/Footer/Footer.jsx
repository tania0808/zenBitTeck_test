import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { FooterS, SocialIcons } from "./Footer.styled";
import { pink, green, yellowUp } from "../../assets/index";

export default function Footer() {
  const socialIcons = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/" },
    { icon: FaTwitter, link: "https://www.twitter.com/" },
    { icon: FaFacebookF, link: "https://www.facebook.com/" },
    { icon: FaPinterestP, link: "https://www.pinterest.co.uk/" },
  ];

  return (
    <FooterS>
      <SocialIcons>
        {socialIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a href={item.link}>
                <Icon />
              </a>
            </li>
          );
        })}
      </SocialIcons>
      <img src={pink} alt="" className="pink" />
      <img src={green} alt="" className="green" />
      <img src={yellowUp} alt="" className="yellow" />
    </FooterS>
  );
}
