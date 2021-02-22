import React, { Component } from 'react'

export default class Teste extends Component {
    render() {
        const luana = {

            cliente: 'Luana',
            idade: 27,
            compras: [
                { nome: 'Notebook', preco: '2500' },
                { nome: 'Geladeira', preco: '3000' },
                { nome: 'Smartphone', preco: '1500' },
            ],
            ativa: true,
        };
        
        const mario = {
            cliente: 'Mario',
            idade: 31,
            compras: [
                { nome: 'Notebook', preco: '2500' },
                { nome: 'Geladeira', preco: '3000' },
                { nome: 'Smartphone', preco: '1500' },
                { nome: 'Guitarra', preco: '3500' },
            ],
            ativa: false,
        };

        const dados = mario

        const total = dados.compras.map((item)=> Number(item.preco)).reduce((a,b)=> a + b)

        
       
        return (
            <div>
             <h1>Cliente do dia</h1>
             <p>Nome: {dados.cliente}</p>
             <p>Idade: {dados.idade}</p>
             <p style={{color :  total > 10000 ? "red": 'green'}}>Total em compras: {total}</p>
            </div>
            )
        }
    }
    