import Grid from "@mui/material/Grid";
import herosectionimage from "../../assest/HeroSectionImage.png";
import dottedImage from "../../assest/DotOrnament.png";
import "./herosection.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Premiumheading from "../../Container/PremiumHeading/Premiumheading";

const HeroSection = () => {
  return (
    <Grid container xs={12} className="hero-section page-section">
      <Grid item xs={4} md={5}>
        <Premiumheading
          title="A Digital Product Agency"
          paragraph="Leading digital agency with solid design and development expertise. We
        build readymade websites, mobile applications, and elaborate online
        business services."
        />
        <ButtonComponent title="Contact Me" />
        <img src={dottedImage} alt="" />
      </Grid>
      <Grid item xs={5} md={5} sm={5} xl={5}className="hero-section-image">
        <img src={herosectionimage} alt="image1"/>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
