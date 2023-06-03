import { Resposta } from "./resposta.model";

export class Conteudo{
    id : number;
    titulo : string;
    duvida : string;
    materia : string;
    usuario : string;
    respostas : Resposta[];
}