import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";
import { Spin } from "antd";

export const ContactUs = () => {
  const [Loading, setLoading] = useState(false);
  const form = useRef();
  const fname = useRef("");
  const [firstName, setfirstName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      fname.current.value = "";
    }, 1000);
    setTimeout(() => {
      setLoading(false);
    }, 1000);


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
    <Spin spinning={Loading}>
      <form ref={form} onSubmit={sendEmail}>
        <input
          ref={fname}
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="First Name"
          type="text"
          required
          name="first_name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Last Name"
          type="text"
          required
          name="last_name"
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Phone Number"
          type="number"
          required
          name="number"
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Email"
          type="email"
          required
          name="user_email"
        />
        <textarea
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Message"
          name="message"
          required
          rows={5}
        />
        <a href="#">
          <NormalButton
            variant={"blue"}
            className="px-3  w-full py-3 flex justify-center items-center"
            type="submit"
          >
            Submit
          </NormalButton>
        </a>
      </form>
    </Spin>
  );
};

export default ContactUs;
