import Grid from "@mui/material/Grid";
import './buttoncomponent.css';

interface ButtonProps {
  title: string;
}

const ButtonComponent = ({ title }: ButtonProps) => {
  return (
    <Grid container xs={12} className="button">
      <Grid className="button-css">{title}</Grid>
    </Grid>
  );
};

export default ButtonComponent;
