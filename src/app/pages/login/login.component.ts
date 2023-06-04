import { Component, OnInit, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public form : FormGroup;
  public mostrarErros : boolean = false;
  
  constructor(
    private fb : FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome : new FormControl(
        "", 
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ),
      senha : new FormControl(
        "", 
        [
          Validators.required,
        ]
      )
    });
  }

  get nome(){
    return this.form.get("nome");
  }

  get senha(){
    return this.form.get("senha");
  }
  public async gravar(nome : AbstractControl<any, any> | null, senha : AbstractControl<any, any> | null){
    try{
      
      // this.auth.login(nome?.value, senha?.value);

      // if(this.auth.estaLogado){
      //   this.location.back();
      // }
      
      this.mostrarErros = true;

    }catch(error){
      
    }
  }
}
