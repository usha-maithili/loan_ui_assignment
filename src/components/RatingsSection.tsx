import React from "react";
import "../styles/ratingsSection.css";
import profile from "../assets/profilep.jpg";
import members from "../assets/members.png";

const RatingsSection: React.FC = () => {

    const testimonials = [
        { stars: 5, text: "I compared three loans in ten minutes and saved thousands on interest. The process was honest and straightforward.", name: "Rajesh Kumar", role: "Business owner, Delhi", image: profile },
        { stars: 5, text: "The AI chatbot answered every question I had. No waiting on hold, no runaround. Just real help when I needed it.", name: "Priya Sharma", role: "Freelancer, Mumbai", image: profile },
        { stars: 5, text: "Insurance options that actually made sense. I customized my coverage and paid less than I expected to pay.", name: "Amit Patel", role: "Software engineer, Bangalore", image: profile }
    ];

    return (
        <div className="testimonial-section">

            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">What Our Clients Say</h2>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="row justify-content-center g-4">

                    {testimonials.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="testimonial-card h-100">

                                <div className="stars mb-3">★★★★★</div>

                                <p className="testimonial-text">"{item.text}"</p>

                                <div className="profile d-flex align-items-center mt-3">
                                    <img src={item.image} alt="profile" className="profile-img" />
                                    <div>
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted">{item.role}</small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cta-section container mt-5">
                <div className="cta-inner mx-auto">
                    <div className="row align-items-center justify-content-center gx-3">

                        <div className="col-lg-5 col-12">
                            <h2 className="fw-bold">Get started in seconds</h2>
                            <p className="cta-text text-muted">
                                Enter your email and we'll send you personalized loan and insurance options matched to your profile.
                            </p>
                            <button className="cta-btn">Look for My Best Option</button>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <img src={members} alt="members" className="cta-image" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingsSection;