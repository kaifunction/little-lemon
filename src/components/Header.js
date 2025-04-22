import { Link } from 'react-router-dom';
import logo from '../images/Logo 20.59.13.svg';
import './Header.css';
import Nav from './Nav';


function Header(){
     return (
          <header>
               <Link to='/'>
                     <img src={logo} alt='logo'/>
               </Link>
               <Nav />
          </header>
     )
}


export default Header;
