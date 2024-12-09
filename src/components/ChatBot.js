import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; // For animations

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Animation setup
  const messageAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 1 },
    reset: true,
    reverse: messages.length % 2 === 0,
  });

//   useEffect(() => {
//   //Runs only on the first render
// }, []);

  console.log('here')

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'bot' }]);
  };

  const handleUserInput = (e) => {
    console.log(1)
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: userInput, sender: 'user' }]);
      setUserInput('');

      // Simulate a response from the bot
      setTimeout(() => {
        sendMessage('Tell me more about your work experience.');
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <div className="chatbox overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <animated.div
            key={index}
            style={messageAnimation}
            className={`message ${message.sender === 'bot' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} p-2 rounded my-2`}
          >
            {message.text}
          </animated.div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex mt-4">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg"
          placeholder="Type your message"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
