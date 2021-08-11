import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from '@material-ui/icons';
import Image from '../assets/img/signup.jpg';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: ''


        }
    }

   

    handleemailChange = (e) => {

        this.state.email = e.target.value;


    }
    handlepasswordChange = (e) => {

        this.password = e.target.value;


    }
    handlefnameChange = (e) => {

        this.state.firstname = e.target.value;

    }
    handlelnameChange = (e) => {

        this.state.lastname = e.target.value;

    }

    onSubmit = (e) => {
       
      
        fetch("http://localhost:5000/users",
            {
              
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    username: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstname,
                    lastName: this.state.lastname

                })

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                window.location.href ='/';
                
                
            })
            .catch(err => console.log(`Error ${err}`))
       
    }

    render() {
        const paperStyle = { padding: '30px 20px', height: 600, width: 480, margin: "10px auto" }
        const headerStyle = { margin: 0 }
        const gridStyle = { backgroundImage: `url(${Image})`, backgroundRepeat: "no-repeat", height: 900 }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTop = { marginTop: 5 }
    
        return (
            <Grid className="grid-main" style={gridStyle}>
                <hr></hr>

                <Paper elevation={20} style={paperStyle} className='papereffects'>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth name='email' label='Email*' onChange={(event) => this.handleemailChange(event)} placeholder="Enter your email" />

                        <TextField fullWidth name='password' label='Password*' onChange={(event) => this.handlepasswordChange(event)} placeholder="Enter your password" />


                        <TextField fullWidth name='firstname' label='First Name*' onChange={(event) => this.handlefnameChange(event)} placeholder="Enter your Firts Name" />


                        <TextField fullWidth name='lastname' label='Last Name*' onChange={(event) => this.handlelnameChange(event)} placeholder="Enter your Last Name" />

                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button type='button' className="addSubmitButton" onClick={(event) => this.onSubmit()} variant='contained' color='primary'>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        )
        //   return (
        //      <div></div>
        //  )
    }
}

export default Signup;
/*

dateOfBirth
:
"21/11/1963"

*/