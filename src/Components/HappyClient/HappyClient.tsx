import { Grid } from "@mui/material";
import "./happyclient.css";
import Premiumheading from "../../Container/PremiumHeading/Premiumheading";
import happyClient from "../../assest/happyclient.png";
import happyClientImage from "../../assest/happyClientImage.png";

const HappyClient = () => {
  return (
    <Grid container sm={12} className="page-section">
      <Grid item sm={12} md={12} xl={12} className="happyClient">
        <Premiumheading
          title="What our happy client say"
          paragraph="Several selected clients, who already believe in our service."
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} xl={12} className="clientList">
        <p>
          <img src={happyClient} alt="happyClient" className="HappyClientImage"/>
        </p>
        <p>
          <Premiumheading
            title="Matthew Paul"
            paragraph="Perfect, very good job! Thank you for the amazing design and work. 
            Really impressed with the high quality and quick turnaround time. Highly recommend."
          />
        </p>
        <p>
          <img src={happyClientImage} alt="" className="happyClientImage2"/>
        </p>
      </Grid>
    </Grid>
  );
};

export default HappyClient;
