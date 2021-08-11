import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import image from "../assets/img/social.png";
import image1 from "../assets/img/Contents.jpg";




const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
     //marginTop: theme.spacing(1),
    padding: theme.spacing(2, 0),
    
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const { description, title } = props;

  
  return (
    <footer className={classes.content}>
      <Container maxWidth="lg">
      <div className="content-container">
      <img src={image1} alt="" width="100%"/>  

        </div>

 
      
      </Container>
    </footer>
  );

}

Content.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

/*<Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>*/