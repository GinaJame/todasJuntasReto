import './App.css';
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import Registro from './components/registro.jsx';
import NotFound from './components/notFound.jsx';
import Header from './components/header';
import Trayectoria from './components/trayectoria';
import Colmena from './components/colmena';
import NuevaRuta from './components/nuevaRuta';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
            <Router>
              <Header />
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/registro"  element={ <Registro />} />
                  <Route path="/login"  element={ <Login />} />
                  <Route path="*" element={<NotFound/>}/>
                  <Route path="/trayectoria" element={<Trayectoria/>}/>
                  <Route path="/colmena" element={<Colmena/>}/>
                  <Route path="/nuevaRuta" element={<NuevaRuta/>}/>
              </Routes>
  
          </Router>
  );
}

export default App;
