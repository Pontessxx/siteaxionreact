import React from 'react'

const SecProposta = () => {
  return (
    <>
        <section className="about" id="about-2">
            <div className="max-width">
                <h2 className="title1">Proposta</h2>
                <div className="about-content">
                    
                    <div className="column right">
                        <div className="text">Sabe até que parece facil?</div>
                        <p>
                            Saiba que não é tão facil assim, claro que criar algo ou melhorar é super trabalhoso, assim como foi com este código. Foram 7 dias, aprendendo sobre cada componente. Começando pelo LCD que significa "Liquid Crystal Display" ou "Display de Cristal Líquido" em português. É um tipo de tecnologia tilizada em telas de dispositivos eletrônicos, como TVs, monitores de computador, relógios digitais, entre outros, que permite a exibição de imagens e informações por meio de cristais líquidos.
                            <br/><br/>
                            Um sensor de gás é um dispositivo que detecta a presença de gases no ar e envia um sinal elétrico para indicar sua presença. E o tão aguardado BUzzer que emite sinal extremamentes Altos(brincadeiras a parte) ele emite um som cujo dure o estipulado. Ligados todos a uma protoboard e a placa arduino uno R3, garanto qeu todos estão funcionando e que alegria!
                        </p>
                    </div>
                    <div className="column left ">
                        <video className="aquarela" autoPlay loop muted>
                            <source src="./img/stopmotion-projeto.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default SecProposta