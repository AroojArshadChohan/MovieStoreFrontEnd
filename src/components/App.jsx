import React from 'react';
import { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './LoginPage';
import Signup from './Signup';

import MovieD from './MovieDetails';
import TVD from './TVDetails';
import Fmovies from './Fmovies';
import Fshows from './Fshows';
import Dashboard from './Dashboard';
import SearchPage from './SearchPage';
import SearchResult from './SearchResult';
import '../assets/css/App.css';
import MovieContext from "./MovieContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const sections = [
  { title: 'Home', url: "/" },
  { title: 'Movies', url: "/Fmovies" },
  { title: 'TV Shows', url: "/Fshows" },
  { title: 'Account', url: "/Dashboard" },
  { title: 'SignIn', url: "/LoginPage" },
  { title: 'SignUp', url: "/Signup" },
  { title: 'SignOut', url: "/" }


];



function App() {
/*
  var [activeComponent, setComponent] = useState([
    {
      nameofComp: "Home",//use to set main component
      user: "Guest"//use to set menu items
    }
  ]);
*/
  var [id, setID] = useState({
    title:""
  });

  const [useractive, setUser] = useState(
    {
      
      user: "Guest",//use to set menu items
      email:"",
      fname:"",
      lname:""
    }
  );
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    console.log("Inside Useeffect movies");
    fetch("http://localhost:5000/movies")
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      setMovies((previousState) => {

        previousState = data;
        return previousState
      });


    })
    .catch(err => console.log(`Error ${err}`));

}, [])

var [tvshows, setShows] = useState([]);

useEffect(() => {

  fetch("http://localhost:5000/tvshows")
    .then(res => res.json())
    .then((data1) => {


      console.log(data1);
      setShows((previousState) => {

        previousState = data1;
        return previousState
      });


    })
    .catch(err => console.log(`Error ${err}`));

}, [])

return (

  <React.Fragment>
    <CssBaseline />

    <Container maxWidth="lg" className="main">
      <MovieContext.Provider value={{ movies, setMovies, tvshows, setShows,useractive, setUser,id,setID }}>
        <Router>
          <Header title="TopWatch" sections={sections} />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Fmovies"><Fmovies /></Route>
            <Route path="/Fshows"><Fshows /></Route>
            <Route path="/LoginPage"><Login /></Route>
            <Route path="/Signup"><Signup /></Route>
            <Route path="/MovieDetails/:id"><MovieD /></Route>
            <Route path="/TVDetails/:id"><TVD /></Route>
            <Route path="/Dashboard"><Dashboard /></Route>
            <Route path="/SearchPage"><SearchPage /></Route>
            <Route path="/SearchResult"><SearchResult /></Route>




          </Switch>
        </Router>



      </MovieContext.Provider>

    </Container>


    <Footer title="Footer" description="None" />


  </React.Fragment>
);
}

export default App;
/*

<Home active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
        <Login active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
        <Signup active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

          <Fmovies handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <Fshows handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <TilesM handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

          <TilesTV handleid={handlleActiveID} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

          <MovieD id={id} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />
          <TVD id={id} active={activeComponent[0].nameofComp} handleAC={handlleActiveComp} />

*/