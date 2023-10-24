import React, { useState } from 'react';
import './index.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add the user's message and loading indicator to the list of messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, user: true },
      { text: 'Loading...', user: false, loading: true },
    ]);
    setInput('');

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        {
          text: 'This is a simple chatbot response.',
          user: false,
          loading: false,
        },
      ]);
    }, 2000);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
        {message.loading ? (
          <div className='loading-indicator'>Loading...</div>
        ) : (
          message.text
        )}
      </div>
    ));
  };

  return (
    <div className='chatbot-container'>
      <div className='header'>AjnaLens Support</div>
      <div className='chat-messages'>{renderMessages()}</div>

      <div className='chat-input'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Type your message...'
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
