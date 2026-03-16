import React from "react";
import cardimg1 from "../assets/cardimg1.png";
import people from "../assets/people.png";

const OfferSection: React.FC = () => {

    // Card data for mapping
    const cards = [
        {
            id: 1,
            title: "Search",
            text: "Find loans matching your profile. Filter by income, employment, and financial goals.",
            button: "Narrow down →",
            img: cardimg1,
            bg: "#9ec9d3"
        },
        {
            id: 2,
            title: "Compare",
            text: "See all options side by side. Review terms, rates, and features easily.",
            button: "Compare now →",
            img: cardimg1,
            bg: "#7ea9bf"
        },
        {
            id: 3,
            title: "Customize",
            text: "Build a plan that fits your needs.Adjust coverage to match your situation.",
            button: "Personalize →",
            img: cardimg1,
            bg: "#6f8fa3"
        }
    ];

    return (
        <div className="container my-5">

            {/* Section heading */}
            <div className="text-center mb-5">

                {/* Small heading */}
                <p className="text-muted mb-1">
                    The 3-Step Journey
                </p>

                {/* Main heading */}
                <h2 className="fw-bold">
                    What We Offer
                </h2>

                {/* Description */}
                <p className="text-muted">
                    Start your search without creating an account first.
                </p>

            </div>

            {/* Cards row */}
            <div className="row justify-content-center g-4">

                {cards.map((card) => (

                    <div key={card.id} className="col-lg-3 col-md-5 col-sm-8">

                        {/* Card */}
                        <div
                            className="p-4 rounded h-100 d-flex flex-column"
                            style={{ backgroundColor: card.bg }}
                        >

                            {/* Number + Title */}
                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="bg-white rounded-circle d-flex justify-content-center align-items-center me-2"
                                    style={{ width: "35px", height: "35px" }}
                                >
                                    {card.id}
                                </div>

                                <h5 className="fw-bold mb-0">
                                    {card.title}
                                </h5>

                            </div>

                            {/* Card text */}
                            <p className="small">
                                {card.text}
                            </p>

                            {/* Button */}
                            <button
                                className="btn border border-black text-dark mb-3 align-self-center"
                                style={{ width: "180px" }}
                            >
                                {card.button}
                            </button>

                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="img-fluid mt-auto rounded"
                            />

                        </div>

                    </div>

                ))}

            </div>

            <div className="container my-5">
                <div className="row align-items-center gx-1 justify-content-center ms-lg-5">

                    {/* LEFT SIDE CONTENT */}
                    <div className="col-lg-5 col-12 text-center text-lg-start mb-4 mb-lg-0 ">

                        {/* Arrow icon circle */}
                        <div
                            className="d-inline-flex justify-content-center align-items-center border border-dark rounded-circle mb-3"
                            style={{ width: "50px", height: "50px" }}
                        >
                            ▲
                        </div>

                        {/* Heading */}
                        <h2 className="fw-bold">
                            No account needed to start
                        </h2>


                        {/* Paragraph */}
                        <p className="text-muted" style={{ maxWidth: "420px" }}>
                            Browse loans and insurance without signing up. Compare what matters,
                            save your choices when you're ready, and apply whenever it suits you.
                        </p>

                        <button className="btn btn-outline-primary px-4">
                            Start Now
                        </button>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="col-lg-5 col-12 text-center">
                        <img
                            src={people}
                            alt="people"
                            className="img-fluid rounded"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default OfferSection;