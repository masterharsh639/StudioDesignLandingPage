import Grid from "@mui/material/Grid";

interface PremiumCardProps {
  logo: string;
  title: string;
  paragraph: string;
}

const PremiumCard = ({ logo, title, paragraph }: PremiumCardProps) => {
  return (
    <Grid container sm={12}>
      <Grid item sm={12}>
        {logo}
      </Grid>
      <Grid item sm={12}>
        {title}
      </Grid>
      <Grid item sm={12}>
        {paragraph}
      </Grid>
    </Grid>
  );
};

export default PremiumCard;
