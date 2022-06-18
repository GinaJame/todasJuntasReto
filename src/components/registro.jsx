import '../styles/registro.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Registro() {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        empresa: '',
        contrasena: '',
        contrasena2: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        if (user.contrasena !== user.contrasena2) {
            alert('Las contraseñas no coinciden');
            return;
        }
        if (user.nombre === '' || user.apellido === '' || user.email === '' || user.empresa === '' || user.contrasena === '' || user.contrasena2 === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        const body = {
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            contrasena: user.contrasena
        };
    }
    const handleOnChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      };
  return (
   
    <div className="Registro">
        <form>
            <div className="form-group">
                <div className='labelInput'>
                    <label htmlFor="nombreInput">Nombre</label>            
                    <input type="text" className="form-control" id="nombreInput" aria-describedby="nombreHelp" placeholder="Nombre" name="nombre" onChange={handleOnChange}/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="apellidoInput">Apellido</label>
                    <input type="text" className="form-control" id="apellidoInput" aria-describedby="apellidoHelp" placeholder="Apellido"name="appellido" onChange={handleOnChange}/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="empresaInput">Empresa</label>
                    <input type="text" className="form-control" id="empresaInput" aria-describedby="empresaHelp" placeholder="Empresa" name="empresa" onChange={handleOnChange}/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" name ="email" onChange={handleOnChange}/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="contrasenaInput">Contraseña</label>
                    <input type="password" className="form-control" id="contrasenaInput" aria-describedby="contrasenaHelp" placeholder="Contraseña" name="contrasena" onChange={handleOnChange}/>
                </div>
                <div className='labelInput'>
                    <label htmlFor="contrasenaInput2">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="contrasenaInput2" aria-describedby="contrasenaHelp" placeholder="Confirmar contraseña" name="contrasena2" onChange={handleOnChange}/>
                </div>
                <input type="submit" className="boton" value="Registrar" onSubmit={onSubmit}/>
                <Link to="login">Ya tengo una cuenta</Link>
            </div>
        </form>
    </div>
  );
}

export default Registro;