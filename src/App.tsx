import "./App.css";
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
    </div>
  );
}

export default App;
