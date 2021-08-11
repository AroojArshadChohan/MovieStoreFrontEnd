import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import image from "../assets/img/social.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
     //marginTop: theme.spacing(1),
    padding: theme.spacing(0, 0),
    

  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <div className="footer-container">
     <nav>
          <ul>
            <li>
             
              <a  href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>

            <li>
              <a href="/">Terms and Conditions</a>
            </li>
            <li>
              <a href="/">Social Media</a>
             
            </li>
            <li>
              
              <img src={image} alt=""/> 
            </li>


          </ul>
        </nav>
        </div>

 
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

/*<Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>*/