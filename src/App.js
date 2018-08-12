import React, { Component } from 'react';
import './App.css';
import Sorteio from './components/sorteio';

class App extends Component {
  state = {
    participantes : [
      {
        "nome_resp_financeiro" : "Josenilson de Jesus Rodrigues Brandão",
        "nome_resp_legal" : "Josenilson de Jesus Rodrigues Brandão",
        "id" : 5131,
        "nome" : "João Lucas de Andrade Brandão"
      },
      {
        "nome_resp_financeiro" : "Ismael Pavão Simas",
        "nome_resp_legal" : "Ismael Pavão Simas",
        "id" : 5167,
        "nome" : "Nicolas Macedo Costa Simas"
      },
      {
        "nome_resp_financeiro" : "Ariel Loras Bejarano",
        "nome_resp_legal" : "Ariel Loras Bejarano",
        "id" : 5612,
        "nome" : "Jamilly Pinheiro Bejarano"
      },
      {
        "nome_resp_financeiro" : "Erivan dos Santos Lima",
        "nome_resp_legal" : "Erivan dos Santos Lima",
        "id" : 5709,
        "nome" : "Marcos Aurélio Coelho Lima"
      },
      {
        "nome_resp_financeiro" : "Antonio Edilson Fernandes Alves",
        "nome_resp_legal" : "Antonio Edilson Fernandes Alves",
        "id" : 5778,
        "nome" : "Edson Batalha Alves"
      },
      {
        "nome_resp_financeiro" : "Enid Nogueira da Cruz",
        "nome_resp_legal" : "Enid Nogueira da Cruz",
        "id" : 6234,
        "nome" : "Maytê Nogueira Fonseca"
      },
      {
        "nome_resp_financeiro" : "Bruno Caldas Fernandes",
        "nome_resp_legal" : "Jeanne Souza Saraiva",
        "id" : 6249,
        "nome" : "Tiago Saraiva Fernandes"
      },
      {
        "nome_resp_financeiro" : "Cristiano Ribeiro Cacique de New York",
        "nome_resp_legal" : "Cristiano Ribeiro Cacique de New York",
        "id" : 6392,
        "nome" : "João Fernandes Castro Cacique de New-york"
      },
      {
        "nome_resp_financeiro" : "Dorian das Chagas Duarte",
        "nome_resp_legal" : "Dorian das Chagas Duarte",
        "id" : 6464,
        "nome" : "Tiago Vítor de Moura Duarte"
      },
      {
        "nome_resp_financeiro" : "Andre Junior Rocha Pinheiro",
        "nome_resp_legal" : "Andre Junior Rocha Pinheiro",
        "id" : 6777,
        "nome" : "Alerrandro Matheus Mineiro Pinheiro"
      },
      {
        "nome_resp_financeiro" : "Socrates Georges Carvalho dos Santos",
        "nome_resp_legal" : "Edna Debora Luz Silva dos Santos",
        "id" : 6790,
        "nome" : "Dara Raquel Luz dos Santos"
      },
      {
        "nome_resp_financeiro" : "José Wilson da Silva Dourado",
        "nome_resp_legal" : "Maria Valdenise Nunes da Silva",
        "id" : 6799,
        "nome" : "Pedro Felipe da Silva Dourado"
      },
      {
        "nome_resp_financeiro" : "Cassio Sérgio Barbosa Silva",
        "nome_resp_legal" : "Cassio Sérgio Barbosa Silva",
        "id" : 6809,
        "nome" : "Ingryd de Cássia Cardoso Silva"
      },
      {
        "nome_resp_financeiro" : "Benjamin Lima de Souza",
        "nome_resp_legal" : "Benjamin Lima de Souza",
        "id" : 7240,
        "nome" : "Beatriz Rocha Ângelo de Souza"
      },
      {
        "nome_resp_financeiro" : "Diogenes Mendes Martins",
        "nome_resp_legal" : "Diogenes Mendes Martins",
        "id" : 7548,
        "nome" : "Ester Pimentel Martins"
      },
      {
        "nome_resp_financeiro" : "Silvio Alves Muniz",
        "nome_resp_legal" : "Silvio Alves Muniz",
        "id" : 7640,
        "nome" : "Samuel Gomes Muniz"
      },
      {
        "nome_resp_financeiro" : "Silvio Alves Muniz",
        "nome_resp_legal" : "Silvio Alves Muniz",
        "id" : 7642,
        "nome" : "Daniel Gomes Muniz"
      },
      {
        "nome_resp_financeiro" : "Emanoel de Jesus Almeida Costa",
        "nome_resp_legal" : "Emanoel de Jesus Almeida Costa",
        "id" : 7874,
        "nome" : "Guilherme de Aquino Costa"
      },
      {
        "nome_resp_financeiro" : "Robson Leandro Gomes Ferreira",
        "nome_resp_legal" : "Robson Leandro Gomes Ferreira",
        "id" : 8020,
        "nome" : "Matheus André Sousa Ferreira"
      },
      {
        "nome_resp_financeiro" : "Iolanda de Jesus Barboza Pereira",
        "nome_resp_legal" : "Fabiano de Jesus Barboza Pereira",
        "id" : 8087,
        "nome" : "João Marcelo Carvalho Pereira"
      },
      {
        "nome_resp_financeiro" : "Walter Sousa Machado Junior",
        "nome_resp_legal" : "Karla Cristiana Rocha Machado",
        "id" : 8561,
        "nome" : "Deborah Aksa Rocha Machado"
      },
      {
        "nome_resp_financeiro" : "Márcio dos Santos Mendes",
        "nome_resp_legal" : "Márcio dos Santos Mendes",
        "id" : 8762,
        "nome" : "Rebeca Corrêa Mendes"
      },
      {
        "nome_resp_financeiro" : "Aristed Frazão Martins",
        "nome_resp_legal" : "Ecilana Silva Nascimento Martins",
        "id" : 8815,
        "nome" : "Tedyson Nascimento Martins"
      },
      {
        "nome_resp_financeiro" : "Carlos Celso Rodrigues Pereira",
        "nome_resp_legal" : "Carlos Celso Rodrigues Pereira",
        "id" : 9316,
        "nome" : "Carlos Celso Rodrigues Pereira Filho"
      },
      {
        "nome_resp_financeiro" : "Sebastião Gomes Filho",
        "nome_resp_legal" : "Sebastião Gomes Filho",
        "id" : 9334,
        "nome" : "João Filipe Viegas Gomes"
      },
      {
        "nome_resp_financeiro" : "Wilton Carlos Rego Ribeiro",
        "nome_resp_legal" : "Heloina Silva Santos",
        "id" : 9340,
        "nome" : "Widson Carlos Santos Ribeiro"
      },
      {
        "nome_resp_financeiro" : "Marcos André Gomes",
        "nome_resp_legal" : "Tatiana Vasconcelos Lima Gomes",
        "id" : 9343,
        "nome" : "Isabela Vasconcelos Lima Gomes"
      },
      {
        "nome_resp_financeiro" : "Antonio Daniel Moreira da Silva Filho",
        "nome_resp_legal" : "Antonio Daniel Moreira da Silva Filho",
        "id" : 9355,
        "nome" : "Gyovanna Flávia Nolasco da Silva"
      },
      {
        "nome_resp_financeiro" : "Gilson Meireles Souza",
        "nome_resp_legal" : "Gilson Meireles Souza",
        "id" : 9356,
        "nome" : "Gustavo Gabriel Leal Souza"
      }
    ],
    sorteado : []  
  }
  sorteio=()=> {
    var randomItem = '';
   randomItem = this.state.participantes[Math.floor(Math.random()*this.state.participantes.length)];
    if(this.state.participantes.length) {
      this.setState({sorteado: [randomItem]})
      this.setState({participantes: this.state.participantes.filter((x) => x.id !==randomItem.id)  })
    } else {
      this.setState({sorteado: []})
    }
        }
  render() {
    return (
      <div className="App">
      <Sorteio 
      sorteados= {this.state.sorteado}
      onSort = {this.sorteio}
      />
      </div>
    );
  }
}

export default App;
