import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = ''; 
  password: string = '';
  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }
  ngOnInit() {
  }

  login(){
    this.fireService.loginWithEmail({email: this.email, password: this.password}).then(res =>{
      console.log(res);
      this.router.navigate(['curriculum'])
    }, err =>{
      alert(err.message)
      console.log(err)
    })
  }
  signup(){
    this.fireService.signup({email:this.email, password: this.password}).then(res =>{
      alert('Cuenta Creada')
    }, err => {
      alert(err.message);
      console.log(err)
    })
  }
  goToSignUp() {
    this.router.navigate(['/signup']); // Navegar a la página de registro
  }

}
