//import React, { useEffect, useState } from 'react';
import './App.css';
import './home.css';

import Home from './Home';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import LogIn from './login/LogIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { render } from '@testing-library/react';
//import axios from 'axios';


    

    function App(){

    
        return (
            <div className="main">
                <Router>
                   
                    <Routes>
                        <Route path='/' exact={true} element={<Home/>}></Route>
                        <Route path='/SignIn' element={<SignIn/>}> </Route>
                        <Route path='/SignUp' element={<SignUp/>}> </Route>
                        <Route path='/LogIn' element={<LogIn/>}> </Route>
                        
                    </Routes>
                </Router>
                
            </div>
        );
        }






export default App;
