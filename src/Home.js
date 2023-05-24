import './App.css';
import './home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const signin = () => {
       navigate("/signIn",{replace:true})
    };

    const signup = () => {
        navigate("/signUp",{replace:true})
    };

  return (
    <div className="main">
    <div className="abc">

        <img src="./techamdavad-logo.png" height="80" width="120"/>
        <div className="signin">
            <p className="txt" onClick={signin}>Signin</p>
            <p className="txt" onClick={signup}>Register</p>
        </div>

    </div>
    <div className="bcolor">
        <div class = "center">
            <h1>Fyrlux premium video meetings <br/>
                Now free for everyone</h1>

            <p>We re-engineered the service we built for secure business meetings, <br/>
                Fyrlux Meet, to make it free and available for all.</p> <br/>

            <input type='button' value="new meeting" />
            <input type='textbox' />
            <input type="button" value="Join" /> <br/>

            <p>Let every conversation flow without compromise  
            <input type='button' value="Try Fyrlux Chat" /> </p>

            <input type='button' value="Discover FyrluxCloud"/>

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
            <a href="#" > Home </a>
            <a href="#" > About </a>
            <a href="#" > Courses </a>
            <a href="#" > services </a>
            <a href="#" > Privacy Policy </a>
        </div>
        <div className="services">
            <p> Our services</p>
            <a href="#" > Web Designing </a>
            <a href="#" > Web Devlopment </a>
            <a href="#" > Application Devlopment </a>
            <a href="#" > Project Management </a>
            <a href="#" > Digital Marketing </a>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.487614499565!2d72.5673085744949!3d23.042578215582903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8461b18f8dcb%3A0xe03667ad5df13776!2sRatnanabh%20Complex%2C%20Ashram%20Rd%2C%20Sattar%20Taluka%20Society%2C%20Usmanpura%2C%20Ahmedabad%2C%20Gujarat%20380014!5e0!3m2!1sen!2sin!4v1681810518169!5m2!1sen!2sin" width="400" height="300" ></iframe>
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

export default Home;
