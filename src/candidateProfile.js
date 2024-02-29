import './candidateProfile.css';
import girlPic from './img/girl2.jpg'
import girlPic1 from './img/girl1.jpg'
import boyPic from './img/boy1.jpg'
import React, { useState } from 'react';
import gmailPic from './img/gmail.png'
import linkedInPic from './img/linkedin.png'
import twitterPic from './img/twitter.png';
import {Link} from 'react-router-dom';


const CandidateProfile = () => {
    const [Candidates,setCandidates]=useState([
        {CandId:1,Name:"Sayali Khedkar",MIS:61220392 ,Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements: ["Topper", "Project Excellence", "Leadership Award"],Image: boyPic},
        {CandId:1,Name:"Sayali Khedkar",MIS:61220392 ,Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements: ["Topper", "Project Excellence", "Leadership Award"],Image: boyPic},
        

    ])

    return ( 
        <div className="profilePage">
            <div className="navbar">
                <div className="nav1_titile">
                    <h2>COEP e-voting portal</h2>
                </div>
                <div className="nav1_links">
                
                    <Link to='./UserHome'>Home</Link>
                    <Link to='./CandidateProfile'>Candidates Profile</Link>
                    <Link to='./Voting'>Vote</Link>
                    <Link to='./Result'>Result</Link>
                    <Link to='./Login1'>Login</Link>

                </div>
                </div>
            <div className="cdptitle">
                <h1>Candidate Profiles</h1>

            </div>
            <div className="profileList">
                <div className="profileCard">
                   {Candidates.map((Cd) => (
    <div className="cardp" key={Cd.CandId}>
        <div className="cardImg">
            <img src={Cd.Image} alt="Profile" />
        </div>
        <div className="cardText">
            <h1>{Cd.Name}</h1>
            <h2>{Cd.Branch}</h2>
        </div>
        <div className="textinfo">
            <p>MIS: {Cd.MIS}</p>
            <p>Year : {Cd.Year}</p>
            <p>CGPA : {Cd.CGPA}</p>
            <p>
                <strong>Achievements:</strong>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '5px' }}>
                    {Cd.Achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </p>
        </div>
        <div className="followLinks">
            <a href='adfgh'><img src={gmailPic} alt="Gmail" /></a>
            <a href='adfgh'><img src={linkedInPic} alt="LinkedIn" /></a>
            <a href='adfgh'><img src={twitterPic} alt="Twitter" /></a>
            
        
        </div>
    </div>
))}


                </div>
            </div>
        </div>
     );
}
 
export default CandidateProfile;