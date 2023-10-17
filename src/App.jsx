// import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header"
import Banner from "./components/Banner"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      {/*<Cards />
      <AboutUs />
      <Contact />
      <FloatingWhatsAppButton />
      <EmailForm />
      <Footer /> */}
    </div>
  );
}



// function Banner() {
//   return (
//     <section className="banner">
//       <h2>Bem-vindo à nossa landing page!</h2>
//     </section>
//   );
// }

// function Cards() {
//   return (
//     <section className="cards">
//       {/* Exemplo de 3 cards */}
//       <div className="card">Card 1</div>
//       <div className="card">Card 2</div>
//       <div className="card">Card 3</div>
//     </section>
//   );
// }

// function AboutUs() {
//   return (
//     <section className="about-us">
//       <h2>Sobre nós</h2>
//       <p>Texto ilustrativo sobre a empresa...</p>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section className="contact">
//       <h2>Contate-nos</h2>
//       <p>Informações de contato...</p>
//     </section>
//   );
// }

// function FloatingWhatsAppButton() {
//   return (
//     <button className="whatsapp-button">🟢 WhatsApp</button>
//   );
// }

// function EmailForm() {
//   return (
//     <section className="email-form">
//       <h2>Inscreva-se para novidades</h2>
//       <form>
//         <input type="email" placeholder="Seu email" />
//         <button type="submit">Enviar</button>
//       </form>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <p>© 2023 Nome da Empresa. Todos os direitos reservados.</p>
//     </footer>
//   );
// }

export default App;
