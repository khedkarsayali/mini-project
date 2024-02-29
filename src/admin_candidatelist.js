import {useState} from 'react'
import girlPic from './img/girl2.jpg'
import girlPic1 from './img/girl1.jpg'
import boyPic from './img/boy1.jpg'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import {Link} from 'react-router-dom';

const AdCandidateList = () => {

    const [Candidates,setCandidates]=useState([
        {CandId:1,Name:"Sayali Khedkar",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image: girlPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:girlPic1},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},
        {CanId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Achievements:"Topper",Image:boyPic},

    ])

    

    return ( 
        <div className="candPage">
            <div className="cNavbar">
            <h2 id="ctitle">Candidate List</h2>
            <div className="cfun">
                <div className="addCand">
                <Link to="/addCdForm"><button id="addCadBut">+ Add Candidate</button></Link>
                    
                    </div>
                        

            </div>
            </div>
            <div className="cList">
                {Candidates.map((Cd)=>(
                    <div className="prevCan" key={Candidates.CanId}>
                        <div className="canImg">
                        <img src={Cd.Image} alt="Profile" />

                        </div>
                        <div className="canInfo">
                            <h4>Name : {Cd.Name}</h4>
                            <p>Branch : {Cd.Branch}</p>
                            <p>Year : {Cd.Year}</p>
                            <p>CGPA : {Cd.CGPA}</p>
                            <p>Special Achievements : {Cd.Achievements}</p>

                        </div>
                        <div className="canEdit">
                        <button id="canEditBut"><MdEdit /> Edit</button>
                        <button id="canDelBut"><MdDelete /> Delete</button>

                        </div>
                        


                    </div>
                ))}
            </div>
        </div>

      

        
     );

    }
export default AdCandidateList;