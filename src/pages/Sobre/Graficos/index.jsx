import React from 'react';

const Graficos = () => {
  return (
    <>
        <section className="aboutS" id="about-valores">
            <div className="max-width">
                <h2 className="title2">Gráfico</h2>
                <div className="aboutS-content">
                    <div className="column left">
                        <img className="grafico" src="./img/dados-grafico-puluicao.png" alt="dados-grafico-puluicao"/>
                    </div>
                    <div className="column right">
                            <p> O projeto de pesquisa envolveu uma revisão da literatura existente sobre sistemas de gerenciamento de gases inteligentes e a realização de entrevistas com responsáveis da área de contabilidade. Com base nessas informações, foi desenvolvido um protótipo do sistema, que foi testado em uma cidade-piloto utilizando um isqueiro para produzir gás carbônico. </p>
                            <p><br/>Os resultados dos testes foram então analisados e usados para melhorar o design do sistema, a fim de promover a criação em massa sem degradar o meio ambiente e garantir a segurança do nosso dispositivo.</p>
                            <p><br/>Os resultados dos testes do protótipo do sistema mostraram que ele era capaz de monitorar com precisão o volume do gás. Além disso, o sistema permitiu que tomassem decisões informadas sobre a gestão de seus poluentes melhorando. Os resultados também mostraram que o sistema poderia ser implementado de forma rentável e eficaz em outras cidades/empresas</p>
                    </div>
                </div>
            </div>
        </section>  
    </>
  );
}

export default Graficos;