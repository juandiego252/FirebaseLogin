import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public auth: AngularFireAuth,
    public storage: AngularFireStorage,
  ) { }

  loginWithEmail(data: LoginData){
    return this.auth.signInWithEmailAndPassword(data.email, data.password); 
  }

  signup(data:LoginData){
    return this.auth.createUserWithEmailAndPassword(data.email,data.password);
  }
}
