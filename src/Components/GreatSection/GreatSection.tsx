import Grid from "@mui/material/Grid";
import "./greatsection.css";
import greatImage from "../../assest/greatSectionImage.png";
import Premiumheading from "../../Container/PremiumHeading/Premiumheading";

const GreatSection = () => {
  return (
    <Grid container xs={12} className="page-section great-section">
      <Grid item xs={12} sm={4} md={4} className="great-image">
        <img src={greatImage} alt="greatImage" className="greatImage"/>
      </Grid>
      <Grid item xs={12} md={5} sm={5}>
        <Premiumheading
          title="Great Digital Product Agency since 2016 "
          paragraph="Our Business Plan is a written document describing a companys core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements."
        />
      </Grid>
    </Grid>
  );
};

export default GreatSection;
