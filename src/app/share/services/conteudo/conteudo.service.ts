import { Injectable } from '@angular/core';
import { Conteudo } from './conteudo.model';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  public ListaConteudos(): Conteudo[] {
    const conteudo : Conteudo[] = [
      { 
        id : 1, 
        titulo : 'Como declarar uma variável em C++?',
        materia : 'Algoritmo',
        duvida : 'Eu preciso declara uma variável do tipo int na linguagem C++ e não estou conseguindo.',
        usuario : 'Lucas',
        respostas : [{
          id : 1,
          avaliacao : 4.8,
          descricao : `
                Para declarar uma variável em C++, você precisa especificar o tipo de dado da variável, seguido pelo nome que você deseja atribuir a ela. Aqui está um exemplo de declaração de variável em C++:
                Exemplo: int idade; A declaração de uma variável 'idade' do tipo inteiro.
                
                Neste exemplo, estamos declarando uma variável chamada "idade" do tipo inteiro (int). Você pode substituir "int" por outros tipos de dados, como "float" para números de ponto flutuante, "char" para caracteres, "bool" para valores booleanos, entre outros.

                Se você deseja atribuir um valor inicial à variável, você pode fazer isso na declaração, adicionando um sinal de igual (=) seguido do valor desejado. Aqui está um exemplo:
                
                Exemplo: int numero = 10; A declaração de uma variável 'numero' do tipo inteiro com valor inicial de 10.`,
          meterialTecnico : 'http://www.bosontreinamentos.com.br/programacao-em-c/declaracao-de-variaveis-em-c/',
          usuarioNome : 'Sophia'
        }]
      },
      { 
        id : 2, 
        titulo : 'Como podemos adicionar um evento de clique a um elemento HTML usando JavaScript?',
        materia : 'Introdução ao Desenvolvimento Web',
        duvida : '',
        usuario : 'Lucas',
        respostas : [{
          id : 1,
          avaliacao : 4.2,
          descricao : '',
          meterialTecnico : '',
          usuarioNome : 'Lucas'
        }]
      },
      { 
        id : 3, 
        titulo : 'O que é a "recursão" em algoritmos e como ela é utilizada?',
        materia : 'Algoritmo',
        duvida : '',
        usuario : 'Lucas',
        respostas : [{
          id : 1,
          avaliacao : 4.5,
          descricao : '',
          meterialTecnico : '',
          usuarioNome : 'Lucas'
        }]
      },
      { 
        id : 4, 
        titulo : 'Como podemos selecionar um elemento específico em uma página HTML usando CSS?',
        materia : 'Introdução ao Desenvolvimento Web',
        duvida : '',
        usuario : 'Mia',
        respostas : [{
          id : 1,
          avaliacao : 4.3,
          descricao : '',
          meterialTecnico : '',
          usuarioNome : 'Mia'
        }]
      },
    ];
    return conteudo;
  }
  public ObterConteudoPorId(id : number) : Conteudo | null{
    return this.ListaConteudos().filter(x => x.id == id)[0];
  }

}