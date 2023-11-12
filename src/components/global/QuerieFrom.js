import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";
import { Spin } from "antd";
import Succcess from "./success"

export const ContactUs = () => {
  const [success, setsuccess] = useState(false);
  const [Loading, setLoading] = useState(false);
  const form = useRef();
  const [fname, lname, pname, ename, mname] = useRef("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      fname.current.value = "";
      lname.current.value = "";
      pname.current.value = "";
      ename.current.value = "";
      mname.current.value = "";
    }, 1000);
    setTimeout(() => {
      setLoading(false);
      setsuccess(true);
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
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="First Name"
          type="text"
          required
          name="first_name"
          ref={fname}
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Last Name"
          type="text"
          required
          name="last_name"
          ref={lname}
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Phone Number"
          type="number"
          required
          name="number"
          ref={pname}
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Email"
          type="email"
          required
          name="user_email"
          ref={ename}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
          placeholder="Message"
          name="message"
          required
          rows={5}
          ref={mname}
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
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
        {success && <Succcess />}
      </form>
    </Spin>
  );
};

export default ContactUs;
