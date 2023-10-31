import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    first_name: "",
    last_name: "",
    number: "",
    user_email: "",
    message: "",
  });
  const { first_name, last_name, number, user_email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (first_name.length === 0 || last_name.length === 0 || number.length === 0 || user_email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_fdpjl7j", // service id
          "template_qwpl58r", // template id
          mailData,
          "KOS94cM91AU01eTnJ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({
              first_name: "",
              last_name: "",
              number: "",
              user_email: "",
              message: "",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <form
      action="/"
      method="post"
      className="contact_form"
      id="contact_form"
      autoComplete="off"
      onSubmit={(e) => onSubmit(e)}
    >
      <div
        className={error ? "empty_notice" : "returnmessage"}
        style={{ display: error == null ? "none" : "block" }}
      >
        <span>
          {error
            ? "Please Fill Required Fields"
            : "Your message has been received, We will contact you soon."}
        </span>
      </div>
      <input
        id="first_name"
        onChange={(e) => onChange(e)}
        value={first_name}
        placeholder="First Name"
        type="text"
        name="first_name"
      />
      <input
        id="last_name"
        onChange={(e) => onChange(e)}
        value={last_name}
        placeholder="Last Name"
        type="text"
        name="last_name"
      />
      <input
        id="number"
        onChange={(e) => onChange(e)}
        value={number}
        placeholder="Phone Number"
        type="number"
        name="number"
      />
      <input
        id="user_email"
        onChange={(e) => onChange(e)}
        value={user_email}
        placeholder="Email"
        type="email"
        name="user_email"
      />
      <textarea
        id="message"
        onChange={(e) => onChange(e)}
        value={message}
        placeholder="Message"
        name="message"
      />
      <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
        <span>send</span>
      </a>
    </form>
  );
};

export default Contact;
