import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleLoginService {
  isLogin:boolean = (localStorage.getItem('Token')==="" || localStorage.getItem("Token")===undefined); 
  setLogin(){
    this.isLogin = !this.isLogin
  }
  constructor() {}
}
