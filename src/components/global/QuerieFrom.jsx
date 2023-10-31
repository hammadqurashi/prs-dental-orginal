import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input placeholder="First Name" type="text" name="first_name" />
      <input placeholder="Last Name" type="text" name="last_name" />
      <input placeholder="Phone Number" type="number" name="number" />
      <input placeholder="Email" type="email" name="user_email" />
      <textarea placeholder="Message" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
