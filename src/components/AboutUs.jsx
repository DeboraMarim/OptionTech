import aboutUsImg from '../images/tecnologia-e-ser-humano-1.png';

function AboutUs() {
    return (
      <div className="about-us">
        <div className="about-content">
          <h2>Sobre Nós</h2>
          <p>Somos uma <span className="highlighted">time</span> de fascinados por <span className="highlighted">desafios</span>. Entendemos que um cliente <span className="highlighted">feliz</span> é sinônimo de <span className="highlighted">sucesso</span>. Nossa prioridade é sempre superar as expectativas, pois sabemos que um <span className="highlighted">cliente satisfeito</span> não apenas retorna, mas também se torna um promotor de nossa <span className="highlighted">marca</span>. Nosso maior <span className="highlighted">objetivo</span> é transformar suas <span className="highlighted">ideias</span> em resultados, pois temos em mente que juntos, alcançamos <span className="highlighted">crescimento</span> e agregamos <span className="highlighted">valor</span>.</p>
        </div>
        <div className="about-image">
          <img src={aboutUsImg} alt="About Us" />
        </div>
      </div>
    );
}

export default AboutUs;
