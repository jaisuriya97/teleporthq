import React from "react";
import banner from "../assets/photo-1646627016659-e30c6a968334.jpeg";
function Hero() {
  return (
 
    <div class="hero">
      <img src={banner} alt="" srcset="" />
      <div class="hero-container">
        <h1>Welcome to our Employee Portal</h1>
        <p>
          Connect and collaborate with your colleagues through our chat feature
        </p>
        <div class="Action-btns">
          <button class="hero-Action-btn btn1">Learn More</button>
          <button class="hero-Action-btn btn2">Get Started</button>
        </div>
      </div>
    </div>
 
  );
}

export default Hero;
