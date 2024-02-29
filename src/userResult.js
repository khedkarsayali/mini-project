import './userResult.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import girlPic from './img/girl2.jpg'
import girlPic1 from './img/girl1.jpg'
import boyPic from './img/boy1.jpg'




const UserResult = () => {

    const [CandW,setCandW]=useState([
        {CandId:1,Image: girlPic,Name:"Sayali Khedkar",voteN:54},
        {CandId:2,Image:boyPic,Name:"Sayali",voteN:14},
        {CandId:3,Image:girlPic1,Name:"Sayali",voteN:20},
        {CandId:4,Image:boyPic,Name:"Sayali",voteN:34},
        

    ])


    return (

        <div className="uRPage">
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
            <div className="winner">
                <h1>Congratulations !!</h1>
                
            </div>
            <div className="stsContainer">
                <div className="stTitle">
                    <h3>Election Statistics</h3>
                </div>
                <div className="UserVoteSt">
                
                    <div className="UperVotes">
                                <table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th id='spanName'>Name</th>
                        <th>Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CandW.map((item) => (
                        <tr key={item.CandId}>
                            <td>{item.CandId}</td>
                            <td>{item.Name}</td>
                            <td>{item.voteN}</td>
                            

                        </tr>
                        ))}
                    </tbody>
                    </table>

                </div>
                

            </div>
            
            </div>
            

        </div>


      );
}
 
export default UserResult;