import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const form = useRef();


  const navigate = useNavigate();
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
      <div
            className={error ? "empty_notice" : "returnmessage"}
            style={{ display: error == null ? "none" : "block" }}
          >
            <span>
              {error
                ? "Please Fill Required Fields"
                : "We will contact you soon."}
            </span>
          </div>
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="First Name"
        type="text"
        name="first_name"
      />
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Last Name"
        type="text"
        name="last_name"
      />
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Phone Number"
        type="number"
        name="number"
      />
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Email"
        type="email"
        name="user_email"
      />
      <textarea
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Message"
        name="message"
        rows={5}
      />
      <a href="#">
        <input
          className=" blc px-4  w-full py-4 flex justify-center items-center"
          type="submit"
          value="Send"
        />
        <NormalButton onClick={navigate("/")}
          variant={"blue"}
          className="px-3  w-full py-3 flex justify-center items-center"
          type="submit"
        >
          Submit
        </NormalButton>
      </a>
    </form>
  );
};

export default ContactUs;
