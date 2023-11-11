import {useState} from 'react';

const App = () => {
  // const [message, setMessage] = useState('');

  // const handleChange = event => {
  //   setMessage(event.target.value);
  // };

  // const handleClick = () => {
  //   setMessage('');
  // };

  return (
    <div>
      <input
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message}
      />

      <button >Clear field</button>
    </div>
  );
};

export default App;
