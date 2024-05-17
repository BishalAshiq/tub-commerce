"use client";
import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Chatbot.css';
import iconMassenger from "../../../public/iconmassanger.png"
import Image from 'next/image';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
      // Logic to send the message to the backend or chat service goes here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-button" onClick={toggleChatbot}>
        {/* <i className="fab fa-facebook-messenger"></i> */}
        <Image height={30} width={30} src={iconMassenger} alt='icon-massanger'/>
      </div>
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <h4>Chat with us</h4>
            <button className="close-button" onClick={toggleChatbot}>&times;</button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chatbot-message">
                  {msg}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <textarea
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
