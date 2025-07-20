
import EventList from "./components/EventList";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Toaster position="top-center" reverseOrder={false} />
      <HeroSection />
      <EventList />
      <About />
      <Footer />
    </div>
  );
};

export default App;
