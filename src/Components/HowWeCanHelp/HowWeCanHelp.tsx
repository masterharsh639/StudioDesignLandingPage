import Grid from "@mui/material/Grid";
import "./howwecanhelp.css";
import Premiumheading from "../../Container/PremiumHeading/Premiumheading";
import PremiumCard from "../../Container/PremiumCard/PremiumCard";
import boxSearch from "../../assest/boxsearch.png";
import code from "../../assest/code.png";
import emptyWallet from "../../assest/emptyWallet.png";
import chartSquare from "../../assest/chartSquare.png";
import reactangle from "../../assest/Rectangle.png";

const HowWeCanHelp = () => {
  return (
    <Grid
      container
      sm={12}
      md={12}
      xl={12}
      className="page-section help-section"
    >
      <Grid item sm={3} md={3} xl={3}>
        <Premiumheading
          title="How can we help your Business ?"
          paragraph="We build readymade websites, mobile applications, and elaborate online business services."
        />
      </Grid>
      <Grid item sm={8} md={8} xl={8} className="premium-card-section">
        <img src={reactangle} alt="reactangle" />
        <Grid>
          <PremiumCard
            logo={boxSearch}
            title="Business Idea Planning"
            paragraph="We present you a proposal and discuss niffty-gritty like"
          />
          <PremiumCard
            logo={code}
            title="Development Website and App"
            paragraph="Communication protocols apart from engagement models"
          />
          <PremiumCard
            logo={emptyWallet}
            title="Business Idea Planning"
            paragraph="We present you a proposal and discuss niffty-gritty like"
          />
          <PremiumCard
            logo={chartSquare}
            title="Development Website and App"
            paragraph="Communication protocols apart from engagement models"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowWeCanHelp;
