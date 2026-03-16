import { useState, useRef } from "react";
import BenifitsSection from "../components/BenifitsSection";
import ChatbotSection from "../components/ChatbotSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OfferSection from "../components/OfferSection";
import RatingsSection from "../components/RatingsSection";
import TrustedBySection from "../components/TrustedBySection";

const Home = () => {

const [showChatbot,setShowChatbot] = useState(false);

const chatbotRef = useRef<HTMLDivElement>(null);

const toggleChatbot = () => {

setShowChatbot(true);

setTimeout(()=>{
chatbotRef.current?.scrollIntoView({ behavior:"smooth" });
},100);

};

return (
<>
<Navbar />

<HeroSection toggleChatbot={toggleChatbot}/>

<OfferSection/>
<TrustedBySection/>

{showChatbot && (
<div ref={chatbotRef}>
<ChatbotSection/>
</div>
)}

<BenifitsSection/>
<RatingsSection/>
<Footer/>
</>
);
};

export default Home;