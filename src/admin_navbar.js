const AdminNavbar = () => {
    return ( 
        <div className="adnav">
            <div className="adtitle">
                <h2>COEP e-voting portal</h2>
            </div>
            <div className="adlinks">
            <a href='./Candidates'>Candidates</a>
            <a href='./Result'>Result</a>
            <a href='./Voters'>Eligible Voters</a>

            </div>
        </div>
        
     );
}
 
export default AdminNavbar;