import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css'

function Navbar() {
  const initialDarkMode = localStorage.getItem('isDarkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    //console.log('btn menu mobile')
  };
  const handleLinkClick = () => {
    toggleMenu(); // Alternar o estado do menu quando um link for clicado
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Salva o novo valor em localStorage
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    // Adicione ou remova a classe 'dark-mode' do elemento <body> ou de um componente superior aqui
    // Exemplo com document.body:
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 100) { // Defina a altura em que deseja que a mudança ocorra
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    // Quando o componente for montado, verifique se o tema deve ser alterado com base no localStorage
    if (initialDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [initialDarkMode]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
    <>
        <nav className={`navbar ${isScrolled ? 'sticky' : ''}`}>
            <div className="max-width">
                <div className="logo"><Link to="/">Axion <span>Green</span></Link></div>
                <ul className={`menu ${isOpen ? '' : 'active'}`}>
                    <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li> 
                    <li><Link to="/sobre" onClick={handleLinkClick}>Sobre</Link></li>
                    <li><Link to="/problemas" onClick={handleLinkClick}>Problemas</Link></li>
                    <li><Link to="/inovacao" onClick={handleLinkClick}>Inovação</Link></li>
                    <li><Link to="/diferencial" onClick={handleLinkClick}>Diferenciais</Link></li>
                    <li><Link to="/selo" onClick={handleLinkClick}>Selo</Link></li>
                    <li><Link to="/signin" onClick={handleLinkClick}>Login</Link></li>
                    <li><Link to="/contato" onClick={handleLinkClick}>Contato</Link></li>
                    <li><button  onClick={toggleDarkMode} id="theme-button" className="theme-button"> trocar tema </button></li>
                </ul>
                <div className="menu-btn" onClick={toggleMenu}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;