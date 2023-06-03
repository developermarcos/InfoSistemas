import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conteudo } from 'src/app/share/services/conteudo/conteudo.model';
import { ConteudoService } from 'src/app/share/services/conteudo/conteudo.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit{
  id: number;
  public conteudo : Conteudo | null;  
  constructor(
    private route: ActivatedRoute,
    private conteudoService : ConteudoService
    ) {
    
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.conteudo = this.conteudoService.ObterConteudoPorId(Number(this.id));
    });
  }
  getPorcentagem(avaliacao : number){
    if(this.conteudo != null){
      return (100 * avaliacao) / 5;
    }
    return 0;
  }
}
