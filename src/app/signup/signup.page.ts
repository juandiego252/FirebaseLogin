import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = ''; 
  password: string = '';
  name: any;
  constructor(
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }
  signup(){
    this.fireService.signup({email:this.email, password: this.password}).then(res =>{
      alert('Cuenta Creada')
    }, err => {
      alert(err.message);
      console.log(err)
    })
  }

}
