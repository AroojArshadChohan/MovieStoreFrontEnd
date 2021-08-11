import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import {useEffect,useState} from 'react';

import '../assets/css/App.css';

import MovieContext from "./MovieContext";

import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



export default function MovieDeatils(props) {
  const [movies, setMovies] = useState([]);


  useEffect(() => {

    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then((data) => {

        setMovies((previousState) => {

          previousState = data;
          return previousState
        });


      })
      .catch(err => console.log(`Error ${err}`));

  }, [])


  const {id} = useParams();

    return (
      <main>
        {movies.map((movie => {
          if (movie.id == id)
            return (
              <section id="movie-description-section">
                <div >

                  <img className="" src={movie.poster} alt="" width='100%' height='700px' />

                  <div className="movie-description-content-area" >
                    <h2>{movie.title}</h2>
                    <p>{movie.dateReleased}</p>
                    <h5>Rent Price</h5>
                    <p>${movie.rentprice}</p>
                    <h5>Purchase Price</h5>
                    <p>${movie.purchaseprice}</p>
                    <h5>Lead Cast</h5>
                    <p>{movie.lead}</p>
                    <h5>User Rating</h5>
                    <p>{movie.rating}%</p>
                    <h5>Overview</h5>
                    <p>{movie.description}</p>

                  </div>
                </div>

              </section>
            )


              }))}

      </main>)

}

