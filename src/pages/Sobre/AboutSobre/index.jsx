import React from 'react'
import { Link } from 'react-router-dom'

const AboutSobre = () => {
  return (
    <>
        <section className="aboutS" id="about">
            <div className="max-width">
                <h2 className="title">Sobre</h2>
                <div className="aboutS-content">
                    <div className="column left">
                        <img src="./img/mensagem-trabalho-em-equipe.jpg" alt="img 1 do carossel"/>
                    </div>
                    <div className="column right">
                        <div className="text">Descrição</div>
                            <p>Nós da Axion Green recebemos um convite da IBM para ajudar na resolução de um problema que eles têm lidado recentemente, que é a falta de gestão e monitoramento adequado de resíduos poluentes em cidades com 500 mil habitantes ou mais, o'que acarreta impactos negativos no meio ambiente e consequentemente na qualidade de vida das pessoas que residem, além disso a má qualidade do ar é um problema em diversas cidades</p>
                            <p><br/> O objetivo deste projeto foi desenvolver um sistema de gerenciamento de resíduos nocivos dispersos no ar a fim de ajudar a reduzir os impactos negativos da gestão inadequada de resíduos em cidades em crescente desenvolvimento. O sistema deve identificar a quantidade de gás com poluentes em uma escala de bom,médio e ruim e alertar a empresa a qualidade que emite os poluentes com o intuito de reduzir os gases nocivos em troca de um incentivo fiscal do meio ambiente com a proposta de reduzir impostos a pagar. </p>
                            <p><br/>Seguindo a ideia da ODS 2030 que possuem metas estabelecidas pela ONU para serem alcançadas até 2030 visando sustentabilidade global. Estes objetivos abrangem diversas áreas do mundo, ligado ao projeto rio+30, iniciativa brasileira para o comprimento dessas metas realizada em 1992(conhecido como rio-92). Buscando engajar setores da sociedade, como empresas, para trabalharem em conjunto na implementação das ações sustentáveis para o desenvolvimento.</p>
                        <Link to="/inovacao">Inovação</Link>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default AboutSobre