import React,{Component} from 'react'

import "../assets/css/App.css"
import { useState, useEffect } from "react";

import { useContext } from 'react';
//Backend Data
import MovieContext from "./MovieContext";
import { TextField,Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';



function SearchPage(){
  
    const { id, setID } = useContext(MovieContext);
    const btnstyle = { margin: '12px 25px', width:'100px' }
    const style2 = { margin: '12px 20px', width:'200px' }

    useEffect(() => {

        setID({
            title:""
        })

    }, [])
    const handleChange = (e) => {

        id.title = e.target.value;
        //console.log(id.title+ " : "+e.target.value);
        
    
      }

    let history = useHistory();

    const onClickButton=()=>
    {
        if(id.title!="")
        history.push("/SearchResult");
        else
        alert("Empty Field!!!");

    }
    return (
        <div className="container">
        <div class="card">
                    <h4>Search By Title</h4>
                    <hr></hr>
                    <TextField label="Title" placeholder='Enter Title' style={style2} onChange={(event) => handleChange(event)} />
                    <Button type='button' onClick={(event) => onClickButton()} className="addSubmitButton" color='primary' variant="contained" style={btnstyle} fullWidth>Search</Button>
                   
                    
                    
                </div>
                
         
        </div>
    
    )
    
}

export default SearchPage;
