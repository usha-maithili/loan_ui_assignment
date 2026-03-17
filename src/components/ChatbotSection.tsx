import React, { useState } from "react";
import "../styles/chatbot.css";
import chatbot from "../assets/chatbot.png";

const ChatbotSection: React.FC = () => {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! Welcome to ABCD Bank Chatbot. I'm here to answer your questions related to your loans and insurances."
        }
    ]);

    const [input, setInput] = useState("");
    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: "user", text: input }]);
        setInput("");
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "Hi! Welcome to ABCD Bank Chatbot. I'm here to answer your questions related to your loans and insurances."
                }
            ]);
        }, 500);
    };
    return (
        <div className="chatbot-wrapper">
            <h2 className="chatbot-title">AI chatbot guidance at every turn</h2>
            <p className="chatbot-subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="chatbot-card">
                {/* LEFT SECTION */}

                <div className="chatbot-left">
                    <button className="login-btn">Login</button>
                    <div className="search-box">
                        <i className="bi bi-search"></i>
                        <input placeholder="Search" />
                    </div>
                    <div className="quick-links">
                        <h6>Quick Links</h6>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Login / Sign up</a></li>
                            <li><a href="/">EMI breakdown</a></li>
                            <li><a href="/">Uploading Documents</a></li>
                            <li><a href="/">Explain CIBIL / LTV Ratio</a></li>
                            <li><a href="/">Comparing Options</a></li>

                            <li className="help-link">
                                <a href="/">Learn how I can help you</a>
                                <i className="bi bi-box-arrow-up-right"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-links mt-5">
                        <p><i className="bi bi-headset"></i> Contact Us</p>
                        <p><i className="bi bi-gear"></i> Settings</p>
                    </div>
                </div>

                {/* RIGHT CHAT AREA */}
                <div className="chatbot-right">
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message-row">
                                <img src={chatbot} alt="chatbot" className="chat-avatar" />
                                <div className="bot-msg">{msg.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-area">
                        <img src={chatbot} alt="chatbot" className="chat-avatar" />
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                        />
                        <button onClick={sendMessage}>
                            <i className="bi bi-send"></i>
                        </button>
                    </div>
                    <div className="chat-bottom">
                        <p>Ask your queries with our new virtual assistant here!</p>
                        <div className="chat-actions">
                            <i className="bi bi-download"></i>
                            <i className="bi bi-trash"></i>
                            <span className="lang">EN</span>
                            <img src={chatbot} alt="chatbot" className="chatbot-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default ChatbotSection;