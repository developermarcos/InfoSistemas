import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  erro: any;
  constructor(public auth: AngularFireAuth) { }

  async EmailSignIn(email: string, senha: string){
      
      const credential = await this.auth.signInWithEmailAndPassword(email,senha).then((success) => {
        this.user = success.user;
      })
      .catch((error) => {
        this.erro = 'Erro de usuário ou senha';
      });
      
  }
  async googleSignIn(){
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
    } catch (error) {
      this.erro = 'Erro de usuário ou senha';   
    }
  }
  async signOut(){
    await this.auth.signOut();
    this.user = null;
  }
}
