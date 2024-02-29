import './addCdForm.css'
import { useState } from 'react';

const AddCd = () => {
    const [name,setName]=useState('');
    const [mis,setMis]=useState('');
    const [year,setYear]=useState('1');
    
    const [branch,setBranch]=useState('comp');
    const [cgpa,setCgpa]=useState('');
    const [ach,setAchievements]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const cand={name,mis,year,branch,cgpa,ach}
    }

    return (
        <div className="addCdFormPage">
                <div className="wrap">
                <div className="infoForm">
                <h1>Add a new Candidate</h1>
                <h2>_____________________________________________________</h2>
                <h3>Add information about the candidate here</h3>
                
                </div>
                <div className="cdForm">
                    <div className="innForm">
                    <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                type="text"
                required 
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
        
                <label>MIS</label>
                <input 
                type="number"
                required
                value={mis}
                onChange={(e)=> setMis(e.target.value)} />
        
                <label>Year</label>
                <select
                value={year}
                onChange={(e)=> setYear(e.target.value)}>
                    <option value='1'>1st year</option>
                    <option value='2'>2nd year</option>
                    <option value='3'>3rd year</option>
                    <option value='4'>4th year</option>
                </select>
        
                <label>Branch</label>
                <select
                value={branch}
                onChange={(e)=> setBranch(e.target.value)}>
                    <option value='comp'>Computer Engineering</option>
                    <option value='entc'>Electronics and Communication Engineering</option>
                    <option value='ele'>Electrical Engineering</option>
                    <option value='instru'>INstrumentation and Control Engineering</option>
                    <option value='mech'>Mechanical Engineering</option>
                    <option value='civil'>Civil Engineering</option>
                    <option value='manu'>Manufacturing Engineering</option>
                    <option value='meta'>Metallurgy Engineering</option>
                    
                </select>
        
                <label>CGPA</label>
                <input 
                
                type="number" 
                required
                value={cgpa}
                onChange={(e)=> setCgpa(e.target.value)} />
        
                <label>Achievements</label>
                <textarea 
                required
                value={ach}
                onChange={(e)=> setAchievements(e.target.value)}></textarea>
        
                <button type="submit">Submit</button>
                </form>
                    </div>
                
                
            </div>



                </div>
                
        </div>
            

      
    );
  };
  
  export default AddCd;
  