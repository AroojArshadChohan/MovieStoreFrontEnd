import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useState, useEffect } from "react";
import MovieContext from "./MovieContext";

import {useContext} from 'react';



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

  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '120%', 
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor:"black",
    color:"orange",
    cursor:"pointer"
  },

  
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function TilesTV(props) {
  const classes = useStyles();
  const {tvshows,setShows} = useContext(MovieContext);
  
  const handleEvent = (e) => {
    props.handleAC("TVD")
    
    var val=e.target.id
    props.handleid(val)   
  

  }
    return (
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
        <h3>Feature TV Shows</h3><br></br>
          <Grid container spacing={4}>
            {tvshows.map((card=> {
               if(card.feature=="true")
              return (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.poster1}
                      title={card.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      <h2 onClick="" id={card.id}>{card.title}</h2>

                      </Typography>

                    </CardContent>

                  </Card>
                </Grid>
              )
            }
            ))}
          </Grid>
        </Container>
      </main>
    );
//  else return (
///    <div></div>
 // )
}