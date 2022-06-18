import '../styles/login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="Login">
        <form>
            <div className="form-group">
                <div className='labelInput'>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="contrasenaInput">Contraseña</label>
                    <input type="password" className="form-control" id="contrasenaInput" aria-describedby="contrasenaHelp" placeholder="Contraseña"/>
                </div>
                <input type="submit" className="boton" value="Registrar"/>
                <Link>¿Olvidaste tu contraseña?</Link>
                <Link to="/registro">¿Eres nuevo aquí? Ve a registro</Link>
            </div>
        </form>
    </div>
  );
}

export default Login;