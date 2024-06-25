import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cards from "./components/Cards";
import ContactUs from "./components/ContactUs";
import Footers from "./components/Footer";
import MouseFollowAnimation from "./components/MouseFollowAnimation";
import AnimatedCursor from "react-animated-cursor"
// import './styles.css';
import './styles.scss';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Cards/>
      <ContactUs/>
      <Footers/>
      <AnimatedCursor/>
      {/* <MouseFollowAnimation/> */}
      </div>
  );
}

export default App;
