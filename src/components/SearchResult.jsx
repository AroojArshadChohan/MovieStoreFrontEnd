import React from 'react';
import { useState, useEffect } from "react";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"

import { useContext } from 'react';
//Backend Data
import MovieContext from "./MovieContext";



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



export default function SearchResult() {
    const classes = useStyles();
    const { id, setID } = useContext(MovieContext);

    let titlem = id.title;
    let titletv = id.title;
    var [movie, setMovie] = useState([]);
    var [show, setShow] = useState([]);

    useEffect(() => {
        console.log("Inside Useeffect movies");
        fetch("http://localhost:5000/movies/title?title=" + titlem)
            .then(res => res.json())
            .then((data) => {
                console.log(data.body);

                setMovie((previousState) => {

                    previousState = data.body;
                    return previousState
                });


            })
            .catch(err => console.log(`Error ${err}`));

    }, [])
    useEffect(() => {
        console.log("Inside Useeffect movies");
        fetch("http://localhost:5000/tvshows/title?title=" + titletv)
            .then(res => res.json())
            .then((data) => {
                console.log(data.body);

                setShow((previousState) => {

                    previousState = data.body;
                    return previousState
                });


            })
            .catch(err => console.log(`Error ${err}`));

    }, [])

    return (

        <main>


            <Container className={classes.cardGrid} maxWidth="md">

            <Typography gutterBottom variant="h5" component="h1" >
                    Movies Result 

                </Typography><br></br>
                <Grid container spacing={1}>
                    {movie.map((card => {

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
                </Grid><hr></hr>
                <Typography gutterBottom variant="h5" component="h1" >
                    TV Shows Result

                </Typography><br></br>
                <Grid container spacing={1}>
                    {show.map((card => {

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
        /*
       <div>
           <h5>Search Result Page</h5>
       </div>*/
    );
}