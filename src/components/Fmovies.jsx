import React from 'react';


import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom"

import MovieContext from "./MovieContext";
import { useContext } from 'react';



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
    backgroundColor: "black",
    color: "orange",
    cursor: "pointer"
  },


}));



export default function Fmovies(props) {
  const classes = useStyles();

  const { movies, setMovies } = useContext(MovieContext);

  const handleEvent = (e) => {
    props.handleAC("MovieD")

    var val = e.target.id
    props.handleid(val)


  }

  return (
    <main>


      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={1}>
          {movies.map((card => {

            return (

              <Grid item key={card.id} xs={12} sm={6} md={4} >

                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.poster1}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5" component="h2" >

                      <Link to={"/MovieDetails/" + card.id}>  {card.title}</Link>

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
}