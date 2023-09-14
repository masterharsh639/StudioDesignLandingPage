import Grid from "@mui/material/Grid";
import "./newsletter.css";
import Premiumheading from "../PremiumHeading/Premiumheading";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

const NewsLetter = () => {
  return (
    <Grid container className="newsletter-section">
      <Grid md={10} sm={10} xl={10} className="newsletter-box">
        <Grid item md={4} sm={4} xl={4}>
          <Premiumheading
            title="Subscribe Newsletter"
            paragraph="I will update good news and promotion service not spam"
          />
        </Grid>
        <Grid item md={4} sm={4} xl={4}>
          <Grid>
            <input
              type="text"
              placeholder="Enter your email address.."
              className="input-feild"
            />
            <Grid className="button-field">
              <ButtonComponent title="Contact Now" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsLetter;
