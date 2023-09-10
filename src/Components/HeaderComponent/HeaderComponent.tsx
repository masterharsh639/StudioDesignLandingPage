import { Grid, Link } from "@mui/material";
import "./headercomponent.css";

const HeaderComponent = () => {
  return (
    <Grid container xs={12} className="page-section header-section">
      <Grid item xs={12} md={5} className="header-logo">
        <p>A+ Studio</p>
      </Grid>
      <Grid item xs={5} md={5} className="header-navs">
        <p className="p-18-600">Home</p>
        <p className="p-18-600">What We Do</p>
        <p className="p-18-600">Service</p>
        <p className="p-18-600">Project</p>
        <p className="p-18-600">Blog</p>
        <p className="p-18-600">Contact</p>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
