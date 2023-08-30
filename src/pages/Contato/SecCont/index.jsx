import React from 'react'
import Grid from '../Grid'
import ContactForm from '../ContatoForm'

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
                                    <div className="sub-title">Axion Green</div>
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
                                    <div className="sub-title">axion.green@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                   {/*  <div className="column rigth">
                        <div className="text">Desenvolvedores</div>
                        <Grid/>
                    </div> */}
                    <ContactForm/>
                    <div className='desenvolv'>
                        <div className="text">Desenvolvedores</div>
                        <Grid/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SecCont