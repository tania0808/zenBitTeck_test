import React from "react";
import { Wrapper } from "./FeedbackForm.styled";
import Button from "../UI/Button/Button";

export const FeedbackForm = () => {
  return (
    <Wrapper>
      <h1>Reach out to us!</h1>
      <form>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            id="name"
            required
            placeholder="Your name*"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            id="email"
            required
            placeholder="Your email*"
          />
        </div>
        <div className="mb-3">
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
