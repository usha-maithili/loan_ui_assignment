import React from "react";
import image from "../assets/Benefits.png";
import "../styles/benefitSection.css";
const BenefitsSection: React.FC = () => {

    const features = [
        { icon: "bi-clock", title: "Approval in hours", text: "Get decisions fast without the waiting game." },
        { icon: "bi-bullseye", title: "Plans built for you", text: "Adjust terms and coverage to match your life." },
        { icon: "bi-list", title: "Simple and clear", text: "No jargon, no confusion, just straightforward options." },
        { icon: "bi-globe", title: "Your language, your choice", text: "Switch languages and see plans for your region." },
        { icon: "bi-box", title: "Short heading here", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { icon: "bi-box", title: "Short heading here", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];

    return (
        <div className="container my-5">
            <div className="mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="row align-items-center gx-3">
                    {/* IMAGE */}
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 text-center">
                        <img
                            src={image}
                            alt="feature"
                            className="img-fluid rounded benefit-image"
                        // style={{ height: "420px", width: "80%", objectFit: "cover" }}
                        />
                    </div>

                    {/* FEATURES */}
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            {features.map((item, index) => (
                                <div key={index} className="col-md-6 col-12">
                                    <i className={`bi ${item.icon} fs-4 mb-2`}></i>
                                    <h6 className="fw-bold">
                                        {item.title}
                                    </h6>
                                    <p className="small text-muted">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <button className="discover-btn w-100 py-2">
                                Discover Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;