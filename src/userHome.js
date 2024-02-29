import './userHome.css';
import { Link } from 'react-router-dom';
import Voting from './voting';
import CandidateProfile from './candidateProfile';

const UserHome = () => {
    return ( 

        <div className="page1">
            <div className="navbar">
                <div className="nav1_titile">
                    <h2>COEP e-voting portal</h2>
                </div>
                <div className="nav1_links">
                <a href='./UserHome'>Home</a>

                    <Link to='./CandidateProfile'>Candidates Profile</Link>
                    <Link to='./Voting'>Vote</Link>
                    <a href='./UserResult'>Result</a>

                </div>
            </div>
            <div className="uTitle">
                <h1>Welome  to  <br></br>COEP  e-Voting <br></br>Portal</h1>
            </div>
            <div className="uText">
                <p id="vline"></p>
                <p>Voting for elections , now simplified <br></br>and more faster using e-voting portal</p>
            </div>
            <div className="uButton">
            <Link to="/Voting"><button>Vote Now</button></Link>
            </div>
        </div>


     );
}
 
export default UserHome;