import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";
import Project from "./Components/Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./Components/Contact Us/ContactUs";
import Footer from "./Components/Footer/Footer";

const App = () => {
  let heroData = [
    { text1: "Your Vision,", text2: "Our Engineering" },
    { text1: "Empowering Tomorrow's", text2: "Infrastructure" },
    { text1: "Beyond Boundaries,", text2: "Building Tomorrow" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

  return (
    <>
    <div className="app">
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <AboutUs />
      <OurServices />
      <Project />
      <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default App;
