import Grid from "@mui/material/Grid";
import "./premiumheading.css";

interface PremiumHeadingProps {
  title: string;
  paragraph: string;
}

const Premiumheading = ({ title, paragraph }: PremiumHeadingProps) => {
  return (
    <Grid container xs={12} className="premium-heading">
      <Grid item xs={10} sm={12} md={12} xl={12}>
        <p className="p-40 premium-title">{title}</p>
        <p className="p-16-grey premium-para">{paragraph}</p>
      </Grid>
    </Grid>
  );
};

export default Premiumheading;
