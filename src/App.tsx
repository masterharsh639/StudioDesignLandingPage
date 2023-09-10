import "./App.css";
import GreatSection from "./Components/GreatSection/GreatSection";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HeroSection from "./Components/HeroSection/HeroSection";
import Client from "./Container/Clients/Client";
import Premiumheading from "./Container/PremiumHeading/Premiumheading";

function App() {
  return (
    <div>
      <HeaderComponent />
      <HeroSection />
      <Client />
      <GreatSection />
    </div>
  );
}

export default App;
