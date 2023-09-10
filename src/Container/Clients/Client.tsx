import Grid from "@mui/material/Grid";
import Premiumheading from "../PremiumHeading/Premiumheading";
import "./client.css";
import amazonLogo from "../../assest/amazonLogo.png";
import UberEatsLogo from "../../assest/UberEatsLogo.png";
import AirbnbLogo from "../../assest/AirbnbLogo.png";
import GoogleLogo from "../../assest/GoogleLogo.png";

const Client = () => {
  return (
    <Grid container xs={12} className="client-section page-section">
      <Grid item sm={5}>
        <Premiumheading
          title="Our Client"
          paragraph="Several selected clients, who already believe in our service."
        />
      </Grid>
      <Grid item sm={6} className="client-logo">
        <p>
          <img src={GoogleLogo} alt="amazon logo" />
        </p>
        <p>
          <img src={AirbnbLogo} alt="" />
        </p>
        <p>
          <img src={UberEatsLogo} alt="" />
        </p>
        <p>
          <img src={amazonLogo} alt="" />
        </p>
      </Grid>
    </Grid>
  );
};

export default Client;
