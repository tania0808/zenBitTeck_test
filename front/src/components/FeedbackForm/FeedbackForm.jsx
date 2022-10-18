import React from "react";
import { Wrapper } from "./FeedbackForm.styled";
import Button from "../UI/Button/Button";
import axios from "axios";

export const FeedbackForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
    await axios.post("http://localhost:3000/messages", conFom);
  };

  return (
    <Wrapper>
      <h1>Reach out to us!</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            placeholder="Your name*"
          />
        </div>
        <div>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            placeholder="Your email*"
          />
        </div>
        <div>
          <textarea
            className="form-control"
            id="message"
            required
            placeholder="Your message*"
          />
        </div>
        <Button name="Send message" type="submit" />
      </form>
    </Wrapper>
  );
};
