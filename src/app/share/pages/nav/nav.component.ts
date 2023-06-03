import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  emailUsuario? : string | null;
  public usuarioLogado : Observable<firebase.User | null>;
  constructor(public auth : AuthService) {
    
  }
  ngOnInit(): void {
    
  }
}
