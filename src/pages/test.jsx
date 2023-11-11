// import {useState} from 'react';

// const App = () => {
//   const [message, setMessage] = useState('');

//   const handleChange = event => {
//     setMessage(event.target.value);
//   };

//   const handleClick = () => {
//     setMessage('');
//   };

//   return (
// <div>
//   <input
//     id="message"
//     name="message"
//     type="text"
//     onChange={handleChange}
//     value={message}
//   />

//   <button onClick={handleClick}>Clear field</button>
// </div>
//   );
// };

// export default App;

import React from "react";
import Layout from "../components/global/Layout";
import Form from "../components/global/form";

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <input
          id="message"
          name="message"
          type="text"
          value={message}
        />

        <button>Clear field</button>
      </div>
      <Form />
    </Layout>
  );
};

export default AboutPage;
