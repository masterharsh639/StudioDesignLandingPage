import { Grid, Link } from "@mui/material";
import './headercomponent.css';

const HeaderComponent = () => {
  return (
    <Grid container xs={12} className="page-section header-section">
      <Grid item xs={5} className="header-logo">
        <Link href="#">A+ Studio</Link>
      </Grid>
      <Grid item xs={5} className="header-navs">
        <Link className="p-18">Home</Link>
        <Link>What We Do</Link>
        <Link>Service</Link>
        <Link>Project</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
