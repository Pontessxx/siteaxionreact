import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
        <section className="about" id="about-produto">
            <div className="max-width">
                <h2 className="title">Produto</h2>
                <div className="about-content">
                    
                    <div className="column right1">
                        <div className="text">introdução e apresentação de nosso produto</div>
                        <p>A certificação de qualidade garante que o dispositivo atenda a padrões e normas estabelecidas, como a ISO 9001 mais especificamente espelhando a FSC que é responsável pela sustentabilidade e a IEC 61508, e que ele foi testado e avaliado quanto à segurança e desempenho. Isso traz diversos benefícios, como aumento da confiança do cliente e redução de riscos de falhas ou acidentes.</p>
                        <p><br/>Um problema específico que pode ser solucionado com o uso de dispositivos Arduino é a falta de controle e monitoramento de gases expelidos pelas indústrias. Podemos utilizá-lo para reduzir a emissão destes gases conscientizando as empresas e clientes finais destas a qual estaria contribuindo para um futuro mais verde</p>
                        <p><br/> A solução proposta com o uso de dispositivos Arduino traz diversos impactos positivos, como aumento da produtividade, redução de custos e riscos, e melhoria na qualidade dos produtos e processos. Além disso, a utilização de tecnologias sustentáveis e eficientes contribui para a preservação do meio ambiente.</p>
                        <p><br/>No entanto, é importante considerar os possíveis impactos negativos da implementação dessas soluções, como a necessidade de treinamento e capacitação de pessoal para operar e instalar esses dispositivos ao redor das empresas, além de possíveis problemas de compatibilidade com sistemas já existentes</p>
                        <p><br/>Para minimizar esses impactos e garantir o sucesso da implementação da solução, é importante realizar um estudo prévio das necessidades e possibilidades do cliente, além de investir em treinamentos e suporte técnico. Também é importante estar atento às atualizações e evoluções tecnológicas para garantir a eficiência e competitividade do dispositivo no mercado</p>
                        <Link to="/selo" >Selo de certificação</Link>
                    </div>
                    <div className="column left-1">
                        <img src="./img/marcadaguaselo.png" alt="IMG de perfil"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products