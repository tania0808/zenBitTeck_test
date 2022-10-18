import React from "react";
import { Wrapper } from "./FeedBack.styled";
import { FeedbackForm } from "../../components/FeedbackForm/FeedbackForm";
import { Map } from "../../components/GoogleMap/Map";

export default function FeedBack() {
  return (
    <Wrapper>
      <FeedbackForm />
      <Map />
    </Wrapper>
  );
}
