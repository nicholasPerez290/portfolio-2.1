 import "./header.css"
 
 function Header({ currentPage, handlePageChange}) {
     
     return (
         <div className="header">
             <a className="resume-cont" href="https://docs.google.com/document/d/1e4GfDtFHHNHLS7hKYcXIEQeR7IHHi6q2YMrFo7W4Yi8/edit?usp=sharing"><div className="resume pulse">Resume</div></a>
             <div className="profile-pic"></div>
         <a><h1 className="name pulse"><span className="name-greet">hello I'm</span><br/>Nicholas Perez</h1></a>
         <nav className="nav">
             <div onClick className="nav-el pulse" id={currentPage === 'Project' ? 'active' : ''} onClick={() => handlePageChange('Project')}>Projects</div>
             <div className="nav-el pulse" id={currentPage === 'Contact' ? 'active' : ''} onClick={() => handlePageChange('Contact')}>Contacts</div>
         </nav>
         </div>
     )
 }

 export default Header