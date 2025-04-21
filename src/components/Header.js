import logo from '../images/Logo 20.59.13.svg';
import './Header.css';
import Nav from './Nav';


function Header(){
     return (
          <header>
               <img src={logo} alt='logo'/>
               <Nav />
          </header>
     )
}


export default Header;
