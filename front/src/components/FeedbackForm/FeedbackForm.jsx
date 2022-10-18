import { useState } from "react";
import axios from "axios";
import Button from "../UI/Button/Button";
import { Wrapper } from "./FeedbackForm.styled";
import { yellowUp } from "../../assets/index";

export const FeedbackForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/messages", contactData);
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Wrapper>
      <img className="smiley" src={yellowUp} alt="yellow smiley" />
      <h1>Reach out to us!</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="name"
            value={contactData.name}
            className="form-control"
            type="text"
            onChange={(e) => handleChange(e, setContactData)}
            required
            placeholder="Your name*"
          />
        </div>
        <div>
          <input
            name="email"
            value={contactData.email}
            className="form-control"
            type="email"
            onChange={(e) => handleChange(e, setContactData)}
            required
            placeholder="Your email*"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={contactData.message}
            className="form-control"
            required
            onChange={(e) => handleChange(e, setContactData)}
            placeholder="Your message*"
          />
        </div>
        <Button name="Send message" type="submit" />
      </form>
    </Wrapper>
  );
};
