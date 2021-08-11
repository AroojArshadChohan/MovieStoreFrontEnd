import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TilesM from './TilesMovies';
import TilesTV from './TilesTV';

import Hero from './Hero';
import Content from './Content';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


class Home extends Component {
  render() {

    
      return (

        <main>
          <Hero/>
          <TilesM />

          <TilesTV  />
          <Content  />

        </main>
        
      )
    
  }
}

export default Home;

