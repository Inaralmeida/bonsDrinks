import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul className='ulHeader'>
                        <li className='liHeader'>Bebidas</li>
                        <li className='liHeader'>Sobre nós</li>
                        <li className='liHeader'>Bons Drinks</li>
                        <li className='liHeader'>Nosso time</li>
                        <li className='liHeader'>Contato</li>
                    </ul>
                </header>
            </div>
        )
    }
}
