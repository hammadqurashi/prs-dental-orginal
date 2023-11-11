import {useState} from 'react';

const App = () => {
  // 👇️ store input's value in state
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage('');
  };

  return (
    <div>
      <input
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message}
      />

      <button onClick={handleClick}>Clear field</button>
    </div>
  );
};

export default App;
