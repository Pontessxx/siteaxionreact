import React from 'react'
import Grid from '../Grid'

const SecCont = () => {
  return (
    <>
        <section className="contact L" id="contact">
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Fale Conosco</div>
                        <p>E-mail
                            Envie suas dúvidas e receba a resposta por e-mail.
                        </p>
                    
                        <div className="icons">
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Nome</div>
                                    <div className="sub-title">Vinheria Agnello</div>
                                </div>
                            </div>
                            <div className="row">
                                <ion-icon name="earth-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                    <div className="sub-title">Av. Paulista 1006 - São Paulo, SP</div>
                                </div>
                            </div>
                            <div className="row">
                                <ion-icon name="mail-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">vinheria.agnello@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="column rigth">
                        <div className="text">imagens</div>
                        {/* <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Nome" id="nome"/>
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" id="email"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="field textarea">
                                <textarea  cols="30" rows="10" placeholder="Escrever...." id="mensagem"></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit">Enviar</button>
                                </div>
                            </div>
                        </form> */}
                        <Grid/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SecCont