import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioLogado : Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.usuarioLogado = auth.authState;
  }

  get estaLogado() : boolean{
    if (this.usuarioLogado !== null)
      return true;
    
    return false;    
  }

  public cadastrar(email : string, senha : string) : Promise<firebase.auth.UserCredential>{
    return this.auth.createUserWithEmailAndPassword(email, senha);
  }

  public login(email: string, senha : string) : Promise<firebase.auth.UserCredential>{
    return this.auth.signInWithEmailAndPassword(email,senha);
  }

  public resetarSenha(email : string) : Promise<void>{
    return this.auth.sendPasswordResetEmail(email);
  }
  public logout() : Promise<void>{
    return this.auth.signOut();
  }

  public getUsuario() : Promise<firebase.User | null>{
    return this.auth.currentUser;
  }

  public obterEmailUsuarioLogado() : string | null{
    this.auth.currentUser.then(x =>{
      return x?.email;
    });
    
    return null;
  }

  public atualizarUsuario(usuario : firebase.User | null){
    return this.auth.updateCurrentUser(usuario);
  }
}
