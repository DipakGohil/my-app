import '../App.css';
import Home from '../Home';
import '../home.css';
import { json, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Storedata } from '../utils/comman';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNameState } from '../nameSlice';
import { setNumberState } from '../numberSlice';


const SignUp = () => {
    const navigate = useNavigate();
    //const [name, setName] = useState('');
   // const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [DateOfBirthError, setDateOfBirthError] = useState('');
    const [addressError, setAddresserror] = useState('');
    const [SignupError, setSignupError] = useState('');

    const name = useSelector((state) => state.name.currentState);
    const number = useSelector((state) => state.number.currentState);
    const dispatch = useDispatch();

    
   /* const win = window.localStorage;

    useEffect(() => {
        if (win.getItem('name'))
            setName(win.getItem('name'));
        if (win.getItem('number'))
            setNumber(win.getItem('number'));
        if (win.getItem('email'))
            setEmail(win.getItem('email'));
        if (win.getItem('username'))
            setUsername(win.getItem('username'));
        if (win.getItem('password'))
            setPassword(win.getItem('password'));
        if (win.getItem('DateOfBirth'))
            setDateOfBirth(win.getItem('DateOfBirth'));
        if (win.getItem('gender'))
            setGender(win.getItem('gender'));
        if (win.getItem('address'))
            setAddress(win.getItem('address'));
    }, []);

   

    useEffect(
        () => {
            win.setItem('name :', name);
            win.setItem('number :', number);
            win.setItem('email :', email);
            win.setItem('username :', userName);
            win.setItem('password :', password);
            win.setItem('DateOfBirth :', DateOfBirth);
            win.setItem('gender :', gender);
            win.setItem('address :', address);
        }, [name, number, email, userName, password, DateOfBirth, gender, address])

*/

    const home = () => {
        navigate("/", { replace: true })
    };

    const Signin = () => {
        navigate("/signIn", { replace: true })
    };

    const handleSignup = () => {







        //  console.log(name + " " + number + " " + email + " " + userName + " " +
        //     password + " " + DateOfBirth + " " + gender + " " + city + " " + address);

        if (name === "") {
            setNameError("Name is Required");
        }
        else if (number === "") {
            setNumberError("Number is Required");
        }
        else if (email === "") {
            setEmailError("Email is Required");
        }
        else if (userName === "") {
            setUserNameError("Username is Required");
        }
        else if (password === "") {
            setPasswordError("Password is Required");
        }
        else if (DateOfBirth === "") {
            setDateOfBirthError("Date of Birth is Required");
        }
        else if (address === "") {
            setAddresserror("Address is required");
        }
        else {
            //Storedata(name,number,email,userName,password,DateOfBirth,gender,address,localStorage);
            axios.get("http://localhost:50000/signUp",
                {
                    params: {
                        name: name,
                        number: number,
                        email: email,
                        userName: userName,
                        password: password,
                        DateOfBirth: DateOfBirth,
                        gender: gender,
                        address: address,
                        city: city,
                    }
                })
                .then((response) => {
                    console.log(response);
                    setSignupError("succsesfully registerd");
                });




        }




    };


    return (
        <div className="main">
            <div className="abc">
                <img src="./techamdavad-logo.png" height="80" width="120" />
                <div className="signin">
                    <p className="txt" onClick={home}> Home </p>
                    <p className="txt" onClick={Signin}> Signin </p>
                </div>
            </div>
            <div className="bcolor">
                <h2>SignUp Here</h2>
                <div className="form">
                    <form>
                        <div className="form2">
                            <label for="fname"> Name : </label>
                            <input type="text" id="fname" value={name} maxLength={16}
                                onChange={(e) => {
                                    const re = /^[a-zA-Z ]+$/;
                                    if (e.target.value === "" || re.test(e.target.value)) {
                                        dispatch(setNameState(e.target.value));
                                    }
                                }
                                } /> <br /> <br />

                        </div>
                        <label>{nameError}</label>
                        <div className="form2">
                            <label for="number"> Contact No. : </label>
                            <input type="text" id="number" value={number} maxLength={10}
                                onChange={(e) => {
                                    const re = /^[0-9]+$/;
                                    if (e.target.value === "" || re.test(e.target.value)) {
                                        dispatch(setNumberState(e.target.value));
                                    }
                                }
                                } /> <br /> <br />
                        </div>
                        <label>{numberError}</label>
                        <div className="form2">
                            <label for="mail"> Email Address : </label>
                            <input type="text" id="mail" value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} /> <br /> <br />
                        </div>
                        <label>{emailError}</label>
                        <div className="form2">
                            <label for="Username"> Username : </label>
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
                            <label for="password"> Password : </label>
                            <input type="password" id="password" value={password}
                                maxLength={10}
                                onChange={(e) => {
                                    const re = /^[A-Za-z0-9_]+$/;
                                    if (e.target.value === "" || re.test(e.target.value)) {
                                        setPassword(e.target.value);
                                    }
                                }} /> <br /> <br />
                        </div>
                        <label>{passwordError}</label>
                        <div className="form2">
                            <label for="DateOfBirth"> DateOfBirth : </label>
                            <input type="date" id="DateOfBirth" value={DateOfBirth}
                                onChange={(e) => {

                                    setDateOfBirth(e.target.value);

                                }} /> <br /> <br />
                        </div>
                        <label>{DateOfBirthError}</label>
                        <div className="form2">
                            <label for="gender"> Gender : </label>
                            <input type="radio" id="gender" name="gender" value="Male"
                                onChange={(e) => {
                                    if (e.target.value === "Male") {
                                        setGender("Male");
                                    }
                                }} />
                            <label for="gender"> Male </label>
                            <input type="radio" id="gender" name="gender" value="Female"
                                onChange={(e) => {
                                    if (e.target.value === "Female") {
                                        setGender("Female");
                                    }
                                }} />
                            <label for="gender"> Female </label> <br /> <br />
                        </div>
                        <div className="form2">
                            <label for="city"> City : </label>
                            <select name="dropdown" id="city" >
                                <option value="Amdavad" selected
                                    onChange={(e) => {
                                        if (e.target.value === "Amdavad") {
                                            setCity("Amdavad");
                                        }
                                    }}> Ahmedabad </option>
                                <option value="surat"
                                    onChange={(e) => {
                                        if (e.target.value === "surat") {
                                            setCity("surat");
                                        }
                                    }}> Surat </option>
                                <option value="baroda"
                                    onChange={(e) => {
                                        if (e.target.value === "baroda") {
                                            setCity("baroda");
                                        }
                                    }}> Vadodara </option>
                                <option value="rajkot"
                                    onChange={(e) => {
                                        if (e.target.value === "rajkot") {
                                            setCity("rajkot");
                                        }
                                    }}> Rajkot </option>
                            </select> <br /> <br />
                        </div>
                        <div className="form2">
                            <label for="address"> Address :</label>
                            <textarea rows="5" cols="20" name="address" id="address" value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}> </textarea>
                            <br /> <br />

                            <label>{addressError}</label>
                            <br /> <br />
                            <label>{SignupError}</label>
                            <br /> <br />
                            <input type="button" value="Register" onClick={
                                () => {
                                    handleSignup();
                                }
                            } />
                        </div>

                        <p id="demo"></p>

                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="address">
                    <img src="./techamdavad-logo.png" height="50" width="150" />
                    <p> Address : 3rd Floor, 305 Ratnanabh Complex,
                        Upstair Garg Library, Opp. Gujarat Vidhyapith,
                        Ashram road, Ahmedabad-380014
                    </p>
                </div>
                <div className="links">
                    <p> Usefull Links </p>
                    <a href="#"> Home </a>
                    <a href="#"> About </a>
                    <a href="#"> Courses </a>
                    <a href="#"> services </a>
                    <a href="#"> Privacy Policy </a>
                </div>
                <div className="services">
                    <p> Our services</p>
                    <a href="#"> Web Designing </a>
                    <a href="#"> Web Devlopment </a>
                    <a href="#"> Application Devlopment </a>
                    <a href="#"> Project Management </a>
                    <a href="#"> Digital Marketing </a>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.487614499565!2d72.5673085744949!3d23.042578215582903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8461b18f8dcb%3A0xe03667ad5df13776!2sRatnanabh%20Complex%2C%20Ashram%20Rd%2C%20Sattar%20Taluka%20Society%2C%20Usmanpura%2C%20Ahmedabad%2C%20Gujarat%20380014!5e0!3m2!1sen!2sin!4v1681810518169!5m2!1sen!2sin"
                        width="400" height="300"></iframe>
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

export default SignUp;
