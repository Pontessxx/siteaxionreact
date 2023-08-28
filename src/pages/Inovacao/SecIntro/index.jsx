import React from 'react'

const SecIntro = () => {
  return (
    <>
        <section className="about" id="about-1">
            <div className="max-width">
                <h2 className="title1">Introdução</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src="./img/papel-codigo.png" alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">Partindo do papél ao código</div>
                        <p><br/> Ao começar tinhamos a ideia básica da solução é desenvolver um sistema de monitoramento de qualidade do ar, que utilize tecnologias como sensores IoT e inteligência artificial para coletar dados e tomar decisões de forma automatizada. (utilizaremos o Arduino)</p>
                        <p><br/>Partindo para o A4 desenhamos da forma que entediamos como funcionaria, sem conhecimento nenhum e de como ligar todos componentes. Nos dedicamos entao a ler e aprender como codificar o arduino e as estruturas que desenvolvenos no papel. </p>
                        <br/>
                        <p>  Sim a parte que tivemos mais trabalho e apanhamos de certa forma foi aqui, erros como: declarar variáveis, ligar pinos errados de cada led, ligar errado o LCD, enlouquecer com o buzzer e por fim o pior a estipulação de medio limpo e sujo do sensor de gas</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SecIntro