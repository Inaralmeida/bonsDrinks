import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="pagContato">
                <h1 className="h1Contato">Contato</h1>

                <section className='sectionForms'>

                    <img className="imgContato" src='https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg'></img>

                    <form className="form">
                    <label className="label" name="nome" htmlFor="nome">Nome:</label>
                    <input   className="input"type="text" name="nome" id="nome"/>
                    <label  className="label" name='email' htmlFor="email">Email:</label>
                    <input  className="input" type="text" name="email" id="email"/>
                    <label  className="label" htmlFor="menssagem">Menssagem:</label>
                    <textarea className="textArea" name="menssagem" rows="5" cols="50"/>
                    <button className="button" type="">Enviar</button>
                    </form>

                </section>
            


            </div>
        )
    }
}
