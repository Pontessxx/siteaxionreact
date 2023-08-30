import React from 'react'
import { Link } from 'react-router-dom';

const Mapeamento = () => {
  return (
    <>
        <section className="about" id="about-mapeamento">
            <div className="max-width">
                <h2 className="title1">Mapeamento</h2>
                <div className="about-content">
                    
                    <div className="column right1">
                        <div className="text">O que iremos fazer com a solução Arduino</div>
                        <p>Estamos mapeando cidades Nobres e periféricas a fim de garantir o direito de respirar o ar bom para todos cidadões independente da classNamee social a que este pertence. Conscientizando ainda mais essa parcela populacional aos seus direitos.</p>
                        <p><br/>Pesquisa da Universidade de São Paulo (USP): Um estudo realizado pela USP analisou a qualidade do ar em diferentes regiões da cidade de São Paulo, incluindo áreas periféricas. Os resultados mostraram que as áreas periféricas apresentam níveis mais altos de poluentes atmosféricos, como material particulado e dióxido de nitrogênio, em comparação com as áreas mais centrais da cidade.</p>
                        <p><br/>O fotógrafo Sebastião Salgado e sua esposa plantaram 2 milhões de árvores em parceria com o Instituto Terra para restaurar a floresta que tinha sido destruída no norte de Mato Grosso. Esta ação contribuiu para a qualidade de vida das pessoas ao redor, uma das pessoas importantes no quesito fotografia e reflorestamento.</p>
                        <Link to="/signin">Mapeamento da cidade</Link>
                    </div>
                    <div className="column left-1">
                        <img src='/img/sebastiao-Salgado.webp' id="image-map" alt="IMG do sebastião-Salgado"/>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
    </>
  );
}

export default Mapeamento