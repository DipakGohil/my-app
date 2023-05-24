
import '../App.css';
import '../home.css';
import { useNavigate } from 'react-router-dom';
import Home from '../Home';
import SignUp from './signUp';

const SignIn = () => {
    const navigate = useNavigate();
    const home = () => {
       navigate("/",{replace:true})
    };

    const Signup = () => {
        navigate("/signUp",{replace:true})
    };

  return (
    <div className='main'>
        <div class="abc">
            <img src="./techamdavad-logo.png" height="80" width="120"/>
                <div class="signin">
                    <p className="txt" onClick={home}> Home </p>
                    <p className="txt"onClick={Signup}> Register</p>
                </div>

        </div>
        <div class="bcolor">
            <h2> SignIn Form</h2>
            <div class="form">
                <label for="user"> Username </label>
                <input type="text" id="user" /> <br/> <br/>
                <label for="password"> Password</label>
                <input type="password" id="password" /> <br/> <br/>
                <input type="button" value="Submit" />

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
        <div>
            <div class="copywrite">
                <p>
                    &copy; copywrite@dipak.com
                </p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default SignIn;
