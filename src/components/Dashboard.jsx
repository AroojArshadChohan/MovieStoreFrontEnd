import React,{Component} from 'react'

import "../assets/css/App.css"


import { useContext } from 'react';
//Backend Data
import MovieContext from "./MovieContext";



function Dashboard(){
  
    const { useractive, setUser } = useContext(MovieContext);
    
    return (
        <div className="container">
        <div class="card">
                    <h1>Welcome, {useractive.fname} {useractive.lname} </h1>
                    <p class="title">{useractive.email}</p>
                    
                    
                </div>
                
         
        </div>
    
    )
    
}

export default Dashboard;
