import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NormalButton } from "./Button";

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
      <h1>Full Name:</h1>
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="First Name"
        type="text"
        required
        name="first_name"
      />
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Middle Name (if applicable)"
        type="text"
        name="middle_name"
      />

      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Last Name"
        type="text"
        required
        name="last_name"
      />
      <h1>Date of Birth:</h1>
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Date of Birth"
        type="date"
        name="date"
      />
      <h1>NHS Number (if known):</h1>
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="NHS Number"
        type="number"
        required
        name="nhs_number"
      />

      <h1>Gender:</h1>
      <select name="Gender">
        <option value="">--Please choose an option--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
        <option value="Prefer_not_to_say"> Prefer not to say</option>
      </select>

      <h1>Address: </h1>
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Street"
        type="text"
        required
        name="Street"
      />
        <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="City"
        type="text"
        required
        name="city"
      />
      <input
        className="px-4 outline-none ring-2 ring-primary/10 focus:ring-2 focus:ring-primary/40 rounded  my-2 transition-all w-full text-neutral-400 focus:text-neutral-600 py-4"
        placeholder="Post Code"
        type="number"
        required
        name="postcode"
      />
       <h1>Contact Information: </h1>
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
  );
};

export default ContactUs;
