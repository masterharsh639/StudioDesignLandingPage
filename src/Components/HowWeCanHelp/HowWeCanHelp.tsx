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
      <Grid item xs={3}>
        <Premiumheading
          title="How can we help your Business ?"
          paragraph="We build readymade websites, mobile applications, and elaborate online business services."
        />
      </Grid>
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={3}>
        <img src={reactangle} alt="" />
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
  );
};

export default HowWeCanHelp;
