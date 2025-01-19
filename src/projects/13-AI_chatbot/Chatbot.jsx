// Import necessary libraries
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './styles.modules.css'; // Add styles for chatbot

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Get current time in a readable format
const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot-msg',
      text: 'Hi, how can I help you?',
      time: getCurrentTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);

  // Toggle chat section
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle sending a message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user-msg',
      text: input,
      time: getCurrentTime(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      // Example using OpenAI API (ChatGPT)
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user-msg', content: input }],
        },
        {
          headers: {
            Authorization: 'Bearer ' + apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = {
        sender: 'bot-msg',
        text: response.data.choices[0].message.content,
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage = {
        sender: 'bot-msg',
        text: 'Sorry, I could not fetch a response at this time.',
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsThinking(false);
  };

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={toggleChat}
        aria-label="Toggle Chat"
      >
        <i className="fas fa-comments"></i>
      </button>

      {/* Chat Section */}
      {isOpen && (
        <section className="chatbot">
          {/* Header */}
          <header className="chatbot-header">
            <h2>Business ChatBot</h2>
            <button
              className="chatbot-close"
              onClick={toggleChat}
              aria-label="Close Chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </header>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.sender === 'bot-msg' && (
                  <i className="fas fa-robot bot-icon"></i>
                )}
                <span>{msg.text}</span>
                <time>{msg.time}</time>
              </div>
            ))}
            {isThinking && (
              <div className="chatbot-message bot">
                <i className="fas fa-robot bot-icon"></i>
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Section */}
          <form
            className="chatbot-input"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your question..."
              aria-label="Your Message"
            />
            <button type="submit" aria-label="Send Message">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default ChatBot;
