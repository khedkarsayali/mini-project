import AdminNavbar from './admin_navbar'
import './admin_home.css'
import  AdCandidateList from './admin_candidatelist'



const Ad_home = () => {
    return (
        <div className="admin_home">
           
                <AdminNavbar></AdminNavbar>
                <AdCandidateList></AdCandidateList>

        </div>
        


     );
}
 
export default Ad_home;