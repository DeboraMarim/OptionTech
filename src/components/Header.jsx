import { useEffect } from 'react';
import logo from '../logo.png'


function Header() {
    useEffect(() => {
      const mobileMenuButton = document.getElementById("mobile-menu");
      const menu = document.querySelector(".menu");
      
      const toggleMenu = () => menu.classList.toggle("active");
  
      mobileMenuButton.addEventListener("click", toggleMenu);
  
      return () => mobileMenuButton.removeEventListener("click", toggleMenu);
    }, []);
  
    return (
      <header>
        <img src={logo} alt="Logo" className="logo"/>
        <h1>OptionTech</h1>
        <nav>
          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contacts">Contact us</a></li>
          </ul>
        </nav>
        <div className='btn'>
             <button className="button">CONTATE AGORA</button>
        </div>
        <div className="menu-toggle" id="mobile-menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
    );
  }

  export default Header;
