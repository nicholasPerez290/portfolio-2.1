 import "./header.css"
 
 function Header({ currentPage, handlePageChange}) {
     
     return (
         <div className="header">
         <a onClick={() => handlePageChange('Head')}><h1 className="name pulse"><span className="name-greet">hello I'm</span><br/>Nicholas Perez</h1></a>
         <nav className="nav">
             <div onClick className="nav-el pulse" onClick={() => handlePageChange('Project')}>Projects</div>
             <div className="nav-el pulse" onClick={() => handlePageChange('Contact')}>Contacts</div>
         </nav>
         </div>
     )
 }

 export default Header