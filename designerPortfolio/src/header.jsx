import { Link } from 'react-router-dom';
function Header(){
return(
    <header className="header">
        <nav>
            <ul>
                <li><a href="/" className="logo">Logo</a></li>
                <div className="nav-items">
                   <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                </div>
                
            </ul>
        </nav>
      
    </header>

);
}
export default Header