import React from "react";
import conversation from "../assets/conversation.png";
import chatbot from "../assets/chatbot.png";
import "../styles/hero.css";

interface Props {
  toggleChatbot: () => void;
}

const HeroSection: React.FC<Props> = ({ toggleChatbot }) => {
  return (
    <section className="container mt-4">
      <div className="hero-card">
        <div className="row align-items-center">
          <div className="col-lg-6 text-lg-start text-center">
            <h1 className="fw-bold mb-3">
              Find Your Perfect Loan and
              Protection Plan in Minutes.
            </h1>
            <p className="mb-4">
              Search through multiple loan types and insurance
              plans tailored to your needs. Compare options,
              customize coverage, and get expert guidance
              every step of the way.
            </p>
            <div className="hero-buttons d-flex flex-column align-items-center align-items-lg-start gap-3">
              <button className="btn btn-outline-light w-50 text-nowrap">
                Explore Loans
              </button>
              <button className="btn btn-outline-light w-50 text-nowrap">
                View Insurances
              </button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0 position-relative">
            <img
              src={conversation}
              alt="conversation"
              className="img-fluid"
            />

            {/* CHATBOT ICON */}

            <img
              src={chatbot}
              alt="chatbot"
              className="hero-chatbot"
              onClick={toggleChatbot}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;