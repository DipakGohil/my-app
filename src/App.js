
import './App.css';
import './home.css';

import Home from './Home';
import SignIn from './login/signIn';
import SignUp from './login/signUp';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";



function App() {

    return (
        <div className="main">
            <Router>
               
                <Routes>
                    <Route path='/' exact={true} element={<Home/>}></Route>
                    <Route path='/SignIn' element={<SignIn/>}> </Route>
                    <Route path='/SignUp' element={<SignUp/>}> </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
