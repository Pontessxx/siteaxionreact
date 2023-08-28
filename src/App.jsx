import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Problemas from './pages/Problemas';
import Inovacao from './pages/Inovacao';
import Difpages from './pages/Difpages';
import Selo from './pages/Selo';
import HomeLogin from './pages/HomeLogin'
import Signin from "./pages/Signin";
import Signup from "./pages/Singup";
import { AuthProvider } from './contexts/auth';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};
function App() {
  
    return (
      <>
        <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  <Route path="/sobre" element={<Layout><Sobre /></Layout>} />
                  <Route path="/problemas" element={<Layout><Problemas /></Layout>} />
                  <Route path="/inovacao" element={<Layout><Inovacao /></Layout>} />
                  <Route path="/diferencial" element={<Layout><Difpages /></Layout>} />
                  <Route path="/selo" element={<Layout><Selo /></Layout>} />
                  
                  
                 {/*  <Route exact path="/homelogin" element={<Private Item={HomeLogin} />} /> */}
                  <Route path="/singin" element={<Signin />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route path="*" element={<Signin />} />
                  {/* Adicione mais rotas para outras páginas aqui */}
              </Routes>
          </Router>
        </AuthProvider>
      </>
    );
}

export default App;