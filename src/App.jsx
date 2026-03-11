
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import WhoCanApply from "./components/WhoCanApply";
import Investors from "./components/Investors";
import FeaturedStartups from "./components/FeaturedStartups";
import AboutKaroStartup from "./components/AboutKaroStartup";
import Footer from "./components/Footer";

const AppContent = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <FeaturedStartups />
        <AboutKaroStartup />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
      <AppContent />
  );
};

export default App;