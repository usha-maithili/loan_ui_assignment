import React from "react";
import logo from "../assets/logo.png";

const TrustedBySection: React.FC = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#3f86a6" }}>
      <div className="container text-center">
        {/* Heading */}
        <p className="text-white fw-semibold mb-4">
          Trusted By
        </p>
        {/* Carousel */}
        <div
          id="trustedCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-5">
                <img src={logo} alt="logo" style={{ width: "150px" }} />
                <img src={logo} alt="logo" style={{ width: "150px" }} />
                <img src={logo} alt="logo" style={{ width: "150px" }} />
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center gap-5">
                <img src={logo} alt="logo" style={{ width: "150px" }} />
                <img src={logo} alt="logo" style={{ width: "150px" }} />
                <img src={logo} alt="logo" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;