import "./voting.css";
import {useState} from 'react';
import girlPic from './img/girl2.jpg'
import girlPic1 from './img/girl1.jpg'
import boyPic from './img/boy1.jpg'
import {Link} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import ConfirmationModal from './ConfirmationModal'; 
import { MdEmail } from "react-icons/md";

const Voting = () => {

    const [Cand,setCand]=useState([
    
        {CandId:1,Name:"Sayali Khedkar",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Image:girlPic1,LinkedInLink:'asdfgh'},
        {CandId:2,Name:"Amit Kumar",Branch:"Electronics Engineering",Year:"3rd year",CGPA:8.21,Image:boyPic,LinkedInLink:'asdfgh'},
        {CandId:2,Name:"Rani Pawar",Branch:"Maufacturing Engineering",Year:"4th year",CGPA:8.05,Image:girlPic1,LinkedInLink:'asdfgh'},
        {CandId:2,Name:"Sejal ",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Image:boyPic,LinkedInLink:'asdfgh'},
        {CandId:2,Name:"Sayali",Branch:"Computer Engineering",Year:"2nd year",CGPA:9.48,Image:boyPic,LinkedInLink:'asdfgh'},
        
    ])
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);

    const handleVoteClick = (candidate) => {
        if (hasVoted) {
            alert("You Have Already voted , you cannot vote multiple times !");
        } else {
            setSelectedCandidate(candidate);
            setConfirmationModal(true);
        }
    };
    

    const handleConfirmation = (confirmed) => {
        if (confirmed && selectedCandidate && !hasVoted) {
            // Perform the voting action
            alert(`Voted for ${selectedCandidate.Name} successfully`);
            setHasVoted(true);
        }

        // Reset selected candidate and close the confirmation modal
        setSelectedCandidate(null);
        setConfirmationModal(false);
        
    };


    return ( 
        <div className="votepage">
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
            <div className="ballotTitle">
            <h1>Voting Ballot</h1>

            </div>
            
            <div className="votingList">
                
            <div className="cdCard">
                {Cand.map((Cd)=>(
                    <div className="cdimg" key={Cand.CanId}>
                        <div className="candImg">
                            <img src={Cd.Image} alt="Profile" />

                        </div>
                        <div className="candInfo">
                            <h4>{Cd.Name}</h4>
                            <p>{Cd.Branch}</p>
                            



                        </div>
                        
                        
                        <div className="voteButton">
                             <button onClick={() => handleVoteClick(Cd)}>Vote</button>
                        </div>
                        <div className="connectLinks">
                        <a id="links" href ={Cd.LinkedInLink}><MdEmail /></a>
                        <a id="links" href ={Cd.LinkedInLink}><FaLinkedin /></a>
                        <a id="links" href ={Cd.LinkedInLink}><FaSquareTwitter /></a>

                        <div className="moreinfo">
                          
                            <Link to='./CandidateProfile'>More info <GrLinkNext /></Link>
                        </div>
                        

                        </div>

                        
                        



                    </div>
                ))}

                

            </div>
        </div>

                  {/* Confirmation Modal */}
            {confirmationModal && (
                <ConfirmationModal
                    candidate={selectedCandidate}
                    onConfirm={(confirmed) => handleConfirmation(confirmed)}
                />
            )}
        </div>
        
     );
}
 
export default Voting;