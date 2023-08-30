import React from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider';
const About = () => {
  return (
    <>
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">Introdução</h2>
                <div className="about-content">
                    <div className="column left">
                        <div>
                            <ImageSlider/>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Lidagos com <span className="typing-2"></span></div>
                        <p>A falta de gestão e monitoramento de resíduos poluentes em cidades com mais de 500 mil habitantes, destacando a má qualidade do ar e a poluição de recursos vitais, como água, ar e solo.</p>
                        <p><br/>Citando também a poluição de recursos vitais para tal pessoas como água, ar e solo. Acrescenta-se o consumo compulsivo e desenfreado que aos poucos degradam o meio ambiente e seu ecossistema.  </p>
                        <p><br/> A solução proposta está ligado ao conceito de Smart City, com soluções inovadoras para diminuir a má qualidade do ar, poluição sonora e descarte indevido do lixo, visando a sustentabilidade e a preocupação com o futuro do planeta. </p>
                        <p><br/>Nossa solução é um sistema de monitoramento de qualidade do ar, que utilize tecnologias como sensores IoT e inteligência artificial para coletar dados e tomar decisões de forma automatizada. (utilizaremos o Arduino)</p>
                        <Link to="/sobre">Sobre nossa start-up</Link>
                    </div>
                </div>
            </div>
        </section>
    </>

  )
}

export default About