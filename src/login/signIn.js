
import '../App.css';
import '../home.css';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { Storedata, checkSignIn } from '../utils/comman';
import { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [SigninError, setSigninError] = useState('');

    const navigate = useNavigate();
    const home = () => {
        navigate("/", { replace: true })
    };

    const Signup = () => {
        navigate("/signUp", { replace: true })
    };

    const handleSignin = (e) => {
        console.log(userName + " " + password + " ");

        if (userName === "") {
            setUserNameError("Please Enter Username");
        }
        else if (password === "") {
            setPasswordError("Please Enter Password");
        }
        else {
            // let data = checkSignIn(userName, password);
            axios.get("http://localhost:50000/signin",
                {
                    params: {
                        username: userName,
                        password: password
                    }
                }) 
                .then((response) => {
                    console.log(response.data);
                    if (response.data.status == "200") {
                        setSigninError(response.data.msg);
                        sessionStorage.setItem('data', response.data);
                        navigate("/", { replace: true });
                    } else if (response.data.status == "201") {
                        setSigninError(response.data.msg);
                    }
                });


            /* if (data) {
                 setSigninError("successfully logged in");
             }
             else {
                 setSigninError("incorrect username/password");
             }*/
        }
    };


    return (
        <div className='main'>
            <div class="abc">

                <img src="./techamdavad-logo.png" height="80" width="120" />
                <div class="signin">
                    <p className="txt" onClick={home}> Home </p>
                    <p className="txt" onClick={Signup}> Register</p>
                </div>

            </div>
            <div class="bcolor">
                <h2> SignIn Form</h2>
                <div class="form">

                    <div className='form2'>
                        <label for="user"> Username :- </label>
                        <input type="text" id="Username" maxLength={10} value={userName}
                            onChange={(e) => {
                                const re = /^[A-Za-z0-9_]+$/;
                                if (e.target.value === "" || re.test(e.target.value)) {
                                    setUsername(e.target.value);
                                }
                            }} /> <br /> <br />
                    </div>
                    <label>{userNameError}</label>

                    <div className="form2">
                        <label for="password"> Password :- </label>
                        <input type="password" id="password" value={password}
                            maxLength={10}
                            onChange={(e) => {
                                const re = /^[A-Za-z0-9_]+$/;
                                if (e.target.value === "" || re.test(e.target.value)) {
                                    setPassword(e.target.value);
                                }
                            }}
                        /> <br /> <br />
                    </div>
                    <label>{passwordError}</label> <br /><br />
                    <label>{SigninError}</label> <br /><br />
                    <input type="button" value="Submit" onClick={
                        () => {
                            handleSignin();
                        }
                    } />

                </div>
            </div>



            <div class="footer">
                <div class="address">
                    <img src="./techamdavad-logo.png" height="50" width="150" />
                    <p> Address : 3rd Floor, 305 Ratnanabh Complex,
                        Upstair Garg Library, Opp. Gujarat Vidhyapith,
                        Ashram road, Ahmedabad-380014
                    </p>
                </div>
                <div class="links">
                    <p> Usefull Links </p>
                    <a href="#"> Home </a>
                    <a href="#"> About </a>
                    <a href="#"> Courses </a>
                    <a href="#"> services </a>
                    <a href="#"> Privacy Policy </a>
                </div>
                <div class="services">
                    <p> Our services</p>
                    <a href="#"> Web Designing </a>
                    <a href="#"> Web Devlopment </a>
                    <a href="#"> Application Devlopment </a>
                    <a href="#"> Project Management </a>
                    <a href="#"> Digital Marketing </a>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.487614499565!2d72.5673085744949!3d23.042578215582903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8461b18f8dcb%3A0xe03667ad5df13776!2sRatnanabh%20Complex%2C%20Ashram%20Rd%2C%20Sattar%20Taluka%20Society%2C%20Usmanpura%2C%20Ahmedabad%2C%20Gujarat%20380014!5e0!3m2!1sen!2sin!4v1681810518169!5m2!1sen!2sin"
                        width="400" height="300"
                    ></iframe>
                </div>
            </div>
            <div className="copywrite">
                <p>
                    &copy; copywrite@dipak.com
                </p>
            </div>
        </div>
    );
}

export default SignIn;
