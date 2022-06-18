import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
  <div className="RegistroBox">
        <Link to ="/login">Login</Link>
        <Link to ="/registro">Registro</Link>
        <Link to ="/">Home</Link>
        <Link to ="/trayectoria">Trayectoria</Link>
    </div>
  )
} 

export  default Header;