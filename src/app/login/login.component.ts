import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string='';
  password: string='';
  errorMessage:string='';

  //static Login credentials
  vaildUsername='admin';
  vaildpassword='password';

  //DI -Router DI using constructor 
  constructor(private router: Router) {}

  login(){
    if (this.username ===this.vaildUsername && this.password ===this.vaildpassword){
      this.router.navigate(['/']);
    }else{
      this.errorMessage='Invalid Credentials ,Please try again.';
    }
  }

}
