import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import SearchPage from './SearchPage';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MovieContext from "./MovieContext";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'black',
    color: 'Orange'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    backgroundColor: 'black',
    color: 'Orange',
    cursor: "pointer"
  },
}));




export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const { useractive, setUser } = useContext(MovieContext);


  const onCLickout = () => {
    setUser(
      {
 

    user: "Guest",//use to set menu items
    email:"",
    fname:"",
    lname:""
      }  
    )
    console.log("Signout Cicked");

  }
  console.log("In Header: " + useractive.user)
  if (useractive.user == "Guest")
    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>

          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}


          >
            <h2>{title}</h2>
          </Typography>


        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to={sections[0].url}
            color="inherit"
            noWrap
            key={sections[0].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[0].title}</h6>
          </Link>
          <Link to={sections[1].url}
            color="inherit"
            noWrap
            key={sections[1].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[1].title}</h6>
          </Link>
          <Link to={sections[2].url}
            color="inherit"
            noWrap
            key={sections[2].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[2].title}</h6>
          </Link>


          <Link to={sections[4].url}
            color="inherit"
            noWrap
            key={sections[4].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[4].title}</h6>
          </Link>

          <Link to={sections[5].url}
            color="inherit"
            noWrap
            key={sections[5].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[5].title}</h6>
          </Link>

          <Link to="/SearchPage">
            <IconButton>
           
            <SearchIcon className={classes.toolbar} />
            

          </IconButton>
          </Link>
        </Toolbar>
      </React.Fragment>
    );
  if (useractive.user == "Auth")
    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>

          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}


          >
            {title}
          </Typography>


        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to={sections[0].url}
            color="inherit"
            noWrap
            key={sections[0].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[0].title}</h6>
          </Link>
          <Link to={sections[1].url}
            color="inherit"
            noWrap
            key={sections[1].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[1].title}</h6>
          </Link>
          <Link to={sections[2].url}
            color="inherit"
            noWrap
            key={sections[2].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[2].title}</h6>
          </Link>
          <Link to={sections[3].url}
            color="inherit"
            noWrap
            key={sections[3].title}
            variant="body2"


            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >

<h6>{sections[3].title}</h6>
          </Link>

          <Link to={sections[6].url}
            color="inherit"
            noWrap
            key={sections[6].title}
            variant="body2"
            

            // onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >


<h6 onClick={(event) =>onCLickout()}>{sections[6].title}</h6>
            
          </Link>
          <Link to="/SearchPage">
            <IconButton>
           
            <SearchIcon className={classes.toolbar} />
            

          </IconButton>
          </Link>

        </Toolbar>
        
      </React.Fragment>
    );
  else
    return (
      <div></div>
    )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

/*
<TextField label="UserName" placeholder='Enter username'/>
          




        */