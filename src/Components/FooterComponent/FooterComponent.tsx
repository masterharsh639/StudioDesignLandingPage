import Grid from "@mui/material/Grid";
import "./footercomponent.css";
import linkedin from "../../assest/linkedin.png";
import twitter from "../../assest/twitter.png";
import facebook from "../../assest/facebook.png";
import Premiumheading from "../../Container/PremiumHeading/Premiumheading";

const FooterComponent = () => {
  return (
    <Grid container xs={12} className="page-section footer-section">
      <Grid item xs={12} sm={3} md={3}>
        <Premiumheading
          title="A+ Studio"
          paragraph="Leading digital agency with solid design and development expertise. 
          We build readymade websites, mobile applications, and elaborate online business services."
        />
        <Grid item className="socialMediaIcon" xs={12}>
          <p>
            <img src={linkedin} alt="" />
          </p>
          <p style={{ marginLeft: "1rem" }}>
            <img src={twitter} alt="" />
          </p>
          <p style={{ marginLeft: "1rem" }}>
            <img src={facebook} alt="" />
          </p>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <h3>What We Do</h3>
        <p>Web Design</p>
        <p>Mobile Design</p>
        <p>Social Media manage</p>
        <p>Market Analysis Project</p>
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Career</p>
        <p>Become Investor</p>
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <h3>Support</h3>
        <p>FAQ</p>
        <p>Policy</p>
        <p>Business</p>
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <h3>Contact</h3>
        <p>Whatsapp</p>
        <p>Support 24</p>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
