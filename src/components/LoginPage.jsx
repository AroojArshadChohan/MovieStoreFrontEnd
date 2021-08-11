

import React, { Component } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import "../assets/css/App.css";
import Image from '../assets/img/login.jpg';
import { Link } from "react-router-dom";
import { ContactsOutlined } from '@material-ui/icons';
import MovieContext from "./MovieContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';





function LoginPage(props) {
  /* constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: ''
      
     }
   }
   */

  const state = {
    email: '',
    password: ''

  }

  let history = useHistory();
  const { useractive, setUser } = useContext(MovieContext);
  const handleemailChange = (e) => {

    state.email = e.target.value;
    console.log(state.email);


  }
  const handlepasswordChange = (e) => {

    state.password = e.target.value;
    console.log(state.password);


  }

  const onSubmit = (e) => {
    console.log("onSubmit Call....");

    fetch("http://localhost:5000/auth",
      {

        method: "POST",
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          username: state.email,
          password: state.password,
          firstName: '',
          lastName: ''
        })

      })
      .then(res => res.json())
      .then(data => {
        console.log(state.email);
        fetch("http://localhost:5000/users/email/"+state.email)
          .then(res => res.json())
          .then((data) => {
            setUser(
              {
          /*  useractive[0].user= "Auth";//use to set menu items
            useractive[0].email=data[0].username;
            useractive[0].fname=data[0].firstName;
            useractive[0].lname=data[0].lastName;*/

            user: "Auth",//use to set menu items
            email:data[0].username,
            fname:data[0].firstName,
            lname:data[0].lastName
              }  
            )
             
          
         console.log(data);
        
            history.push('/Dashboard');


          })
          .catch(err => console.log(`Error ${err}`));
      })
      .catch(err => console.log(`Error:  ${err}`))

  }


  //  render() {
  // const { user } = state;
  const paperStyle = { padding: 20, height: 580, width: 470, margin: "20px auto" }
  const paperStyle1 = { padding: 20, height: 580, width: 470, margin: "20px auto", backgroundImage: `url(${Image})` }
  const gridStyle = { padding: 30, width: '45%' }
  const gridStyle1 = { padding: 30, width: '45%' }
  const gridStyle2 = { padding: 30, width: '96%' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }

  return (

    <Grid container className="grid-main" style={gridStyle2} >


      <Grid style={gridStyle}  >
        <Paper elevation={10} style={paperStyle1} >
        </Paper>
      </Grid>

      <Grid style={gridStyle1}>

        <Paper elevation={10} style={paperStyle} className='papereffects'>
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField name='email' label="UserName" onChange={(event) => handleemailChange(event)} type='email' placeholder='Enter username' fullWidth required />

          <TextField name='password' label="Password" onChange={(event) => handlepasswordChange(event)} placeholder='Enter password' type='password' fullWidth required />

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button type='button' onClick={(event) => onSubmit()} className="addSubmitButton" color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography  > Do you have an account ?
            <Link to="/Signup"  >
              Sign Up
            </Link>
          </Typography>



        </Paper>


      </Grid>


    </Grid>







  )
  //   return (
  //    <div></div>
  //  )
  //  }
}

export default LoginPage;
