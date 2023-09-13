import Grid from "@mui/material/Grid";
import './premiumcard.css';
interface PremiumCardProps {
  logo: string;
  title: string;
  paragraph: string;
}

const PremiumCard = ({ logo, title, paragraph }: PremiumCardProps) => {
  return (
    <Grid container sm={12} className="premium-card">
      <Grid item sm={8} className="premium-logo">
        <img src={logo} alt="" />
      </Grid>
      <Grid item sm={8} className="p-24">
        {title}
      </Grid>
      <Grid item sm={8} className="p-16-grey">
        {paragraph}
      </Grid>
    </Grid>
  );
};

export default PremiumCard;
