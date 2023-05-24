import '../App.css';
import Home from '../Home';
import '../home.css';
import { useNavigate } from 'react-router-dom';
import SignIn from './signIn';


const SignUp = () => {
    const navigate = useNavigate();
    const home = () => {
       navigate("/",{replace:true})
    };

    const Signin = () => {
        navigate("/signIn",{replace:true})
    };


  return (
    <div className="main">
        <div class="abc">
            <img src="./techamdavad-logo.png" height="80" width="120"/>
                <div class="signin">
                    <p className="txt" onClick={home}> Home </p>
                    <p className="txt"onClick={Signin}> Signin </p>
                </div>
        </div>
        <div class="bcolor">
            <h2>SignUp Here</h2>
            <div class="form">
                <form>
                    <div class="form2">
                        <label for="fname"> Name : </label>
                        <input type="text" id="fname" value=""/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="number"> Contact No. : </label>
                        <input type="number" id="number"/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="mail"> Email Address : </label>
                        <input type="mail" id="mail"/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="Username"> Username : </label>
                        <input type="text" id="Username"/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="password"> Password : </label>
                        <input type="password" id="password"/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="dob"> DOB : </label>
                        <input type="date" id="dob"/> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="gender"> Gender : </label>
                        <input type="radio" id="gender" name="gender" value="Male" checked/>
                        <label for="gender"> Male </label>
                        <input type="radio" id="gender" name="gender" value="Female"/>
                        <label for="gender"> Female </label> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="city"> City : </label>
                        <select name="dropdown" id="city">
                            <option value="Amdavad" selected> Ahmedabad </option>
                            <option value="surat"> Surat </option>
                            <option value="baroda"> Vadodara </option>
                            <option value="rajkot"> Rajkot </option>
                        </select> <br/> <br/>
                    </div>
                    <div class="form2">
                        <label for="address"> Address :</label>
                        <textarea rows="5" cols="20" name="address" id="address"> Enter your address here </textarea>
                        <br/> <br/>
                        <label id="label" value=""></label>
                        <br/> <br/>

                        <input type="button" value="Register" onclick="register()"/>
                    </div>

                    <p id="demo"></p>

                </form>
            </div>
        </div>
        <div class="footer">
            <div class="address">
                <img src="./techamdavad-logo.png" height="50" width="150"/>
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
                    width="400" height="300"></iframe>
            </div>
        </div>
        <div class="copywrite">
            <p>
                &copy; copywrite@dipak.com
            </p>
        </div>
   
   
    </div>
  );
}

export default SignUp;
