import React from 'react';
import { Link } from 'react-router-dom';

const Diferenciais = () => {
  return (
    <>
        <section className="aboutS" id="about-valores">
            <div className="max-width">
                <h2 className="title1">Valores</h2>
                <div className="aboutS-content">
                    <div className="column left">
                        <img src="./img/uni-values.jpg" alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">Missão / Visão / Valores</div>
                        <ul>
                            <li><p>Nossa missão é ser pioneira no ramo, recebendo credibilidade pela excelência de nossos serviços.</p></li>
                            <li><p>A visão de nossa start-up em um futuro não tão distante é atingir a marca de valor empresarial equivalente à "unicórnio" (start-up com alto valor patrimonial).</p></li>
                            <li><p>Inovação está como pilar de nossos valores, inovando e promovendo sustentabilidade a partir de nossos serviços.</p></li>
                            <li><p>Sustentabilidade é outro pilar que levamos como um mantra, sempre visando um futuro mais próspero e "verde".</p></li>
                            <li><p>Qualidade: em nossa start-up, prezamos principalmente pela qualidade de nosso produto.</p></li>
                        </ul>
                        <Link to="/diferencial">Mais detalhes</Link>
                    </div>
                </div>
            </div>
        </section> 
    </>
  );
}

export default Diferenciais;