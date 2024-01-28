import './App.css';

import Navbar from './componentes/navBar/NavBar';
import Footer from './componentes/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/home/login/Login';
import Cadastro from './cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contextos/AuthContext';
import ListaTemas from './componentes/temas/listaTemas/ListaTemas';
import FormularioTema from './componentes/temas/formularioTema/FormularioTema';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;