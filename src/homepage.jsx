import React from "react";
import "./App.css";
import mainImage from './assests/main.jpg';
import Image1 from './assests/image1.png';
import Image2 from './assests/image2.png';
import Middle from "./components/middleComponent/middle";
import Footer from "./components/footer/footer";


const HomeScreen = () => {


    return (
        <div className="home">
            <div className="mainImageContainer">
                <img src={mainImage} alt=" " className="mainImage" />
                <div className="overlay">
                    <h2>We crush your competitors, goals, and sales records - without the B.S.</h2>
                    <button className="btn">Get free consultation</button>
                </div>
            </div>
            <div className="section1">
                <div className="section1-image">
                    <img src={Image1} alt=" " />
                </div>
                <div className="section1-content">
                    <h1>Web & Mobile App Development</h1>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <button className="btn">Learn More</button>
                </div>

            </div>
            <div className="section2">
                <div className="section2-content">
                    <h1>Digital Strategy Consulting</h1>
                    <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button className="btn">Learn More</button>
                </div>
                <div className="section2-image">
                    <img src={Image2} alt=" " />
                </div>

            </div>
            <Middle/>
            <Footer/>
        </div>

    );
}

export default HomeScreen;