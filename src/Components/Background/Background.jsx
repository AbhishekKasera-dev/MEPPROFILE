import React from "react";
import "./Background.css";
import video2 from "../../assets/video3.mp4";
import image3 from "../../assets/b5.jpg";
import image23 from "../../assets/b4.jpg";
import image21 from "../../assets/b8.jpg";

const Background = ({ playStatus, heroCount }) => {
  return (
    <div id="home" className="background-container fade-in">
      {/* {playStatus ? (
        <video
        className="background fade-in"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        loading="lazy"
      >
        <source src={video2} type="video/mp4" />
      </video> */}
      {/* ) :  */}
      {heroCount === 0 ? (
        <img src={image3} className="background" alt="Background" />
      ) : heroCount === 1 ? (
        <img src={image21} className="background" alt="Background" />
      ) : heroCount === 2 ? (
        <img src={image23} className="background" alt="Background" />
      ) : null}
    </div>
  );
};

export default Background;
