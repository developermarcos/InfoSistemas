import { Component } from '@angular/core';
import { AuthService } from 'src/app/share/services/auth/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  email = '' as string;
  password = '' as string;

  constructor(public auth : AuthService) {
  }
}
