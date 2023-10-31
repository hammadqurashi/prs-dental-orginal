
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    // redirecting to thank page
    navigate("/thank-you");

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
    <React.Fragment>
      <h2>EmailJS</h2>
      <form onSubmit={sendEmail} ref={form}>
        <div className="fields">
          <label>Full Name (required)</label>
          <input type="text" name="from_name" required />
        </div>
        <div className="fields">
          <label>Email (required)</label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="example@yourmail.com"
          />
        </div>
        <div className="fields">
          <label>Phone Number (required)</label>
          <input type="number" name="phone" required placeholder="+123456789" />
        </div>
        <div className="fields">
          <label>Subject (required)</label>
          <input type="text" name="subject" required />
        </div>
        <div className="fields">
          <label>Message (required)</label>
          <textarea
            name="message"
            required
            placeholder="Type your message here..."
          />
        </div>
        <div className="fields">
          <input type="submit" value="send" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
