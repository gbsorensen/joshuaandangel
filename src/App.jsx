import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Invitation from "./sections/Invitation";
import Countdown from "./sections/Countdown";
import Story from "./sections/Story";
import Details from "./sections/Details";
import Gallery from "./sections/Gallery";
import Venue from "./sections/Venue";
import RSVP from "./sections/RSVP";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Invitation />
      <Countdown />
      <Story />
      <Details />
      <Gallery />
      <Venue />
      <RSVP />
     <Footer />
    </>
  );
}