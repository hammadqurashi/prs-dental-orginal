import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fdpjl7j",
        "template_qwpl58r",
        form.current,
        "KOS94cM91AU01eTnJ"
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
      <a id="send_message" href="#" value="Send">
        <span>Submit Message </span>
      </a>
    </form>
  );
};

export default ContactUs;
