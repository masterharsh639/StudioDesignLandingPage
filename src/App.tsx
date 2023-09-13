import "./App.css";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import GreatSection from "./Components/GreatSection/GreatSection";
import HappyClient from "./Components/HappyClient/HappyClient";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import HeroSection from "./Components/HeroSection/HeroSection";
import HowWeCanHelp from "./Components/HowWeCanHelp/HowWeCanHelp";
import Client from "./Container/Clients/Client";
import Premiumheading from "./Container/PremiumHeading/Premiumheading";

function App() {
  return (
    <div>
      <HeaderComponent />
      <HeroSection />
      <Client />
      <HowWeCanHelp />
      <GreatSection />
      <HappyClient />
      <FooterComponent/>
    </div>
  );
}

export default App;
