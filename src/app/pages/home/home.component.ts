import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Conteudo } from 'src/app/share/services/conteudo/conteudo.model';
import { ConteudoService } from 'src/app/share/services/conteudo/conteudo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public titulo : string;
  public materia : string;
  public conteudos : Conteudo[];
    constructor(
      public conteudoService : ConteudoService,
      private route : Router
      ) {
      this.conteudos = this.conteudoService.ListaConteudos();
    }
    public Visualizar(id : number){
      this.route.navigate(['/conteudo', id]);
    }
    public botaoPressionado(event : Event){
      const conteudosFiltro = this.conteudoService.ListaConteudos();
      this.conteudos = [];
      conteudosFiltro.filter(x =>{
        console.log(this.CampoNuloOuUndefined(this.titulo));
        console.log(this.CampoNuloOuUndefined(this.materia));
          if(!this.CampoNuloOuUndefined(this.titulo) && !this.CampoNuloOuUndefined(this.materia)){
            if(this.containsIn(x.titulo, this.titulo) && this.containsIn(x.materia, this.materia)){
              this.conteudos.push({
                  id : x.id,
                  duvida : x.duvida,
                  materia : x.materia,
                  respostas : x.respostas,
                  titulo : x.titulo,
                  usuario : x.usuario
                });
            }
          }else if(!this.CampoNuloOuUndefined(this.titulo) && this.CampoNuloOuUndefined(this.materia)){
            console.log('titulo');
            if(this.containsIn(x.titulo, this.titulo)){
              this.conteudos.push({
                  id : x.id,
                  duvida : x.duvida,
                  materia : x.materia,
                  respostas : x.respostas,
                  titulo : x.titulo,
                  usuario : x.usuario
                });
            }
          }
          else if(this.CampoNuloOuUndefined(this.titulo) && !this.CampoNuloOuUndefined(this.materia)){
            if(this.containsIn(x.materia, this.materia)){
              this.conteudos.push({
                  id : x.id,
                  duvida : x.duvida,
                  materia : x.materia,
                  respostas : x.respostas,
                  titulo : x.titulo,
                  usuario : x.usuario
                });
            }
          }
      });
      console.log('tamanho '+this.conteudos.length);
      if(this.conteudos.length == 0){
        this.conteudos = this.conteudoService.ListaConteudos();
      }
    }
    private CampoNuloOuUndefined(string: string) : boolean{
      return string == '' || string == undefined;
    }
    private containsIn(textoReferencia : string, texto: string) : boolean{
      return textoReferencia.toLocaleLowerCase().indexOf(texto.toLocaleLowerCase()) > -1;
    }
}
