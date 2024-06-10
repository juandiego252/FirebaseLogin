import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToLoginPage() {
    this.navCtrl.navigateForward('/login'); // Navegar a la página de inicio de sesión
  }

  goToSignUpPage() {
    this.navCtrl.navigateForward('/signup'); // Navegar a la página de registro
  }

}

